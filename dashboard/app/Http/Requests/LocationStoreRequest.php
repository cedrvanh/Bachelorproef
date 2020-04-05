<?php

namespace App\Http\Requests;

use App\Rules\Latitude;
use App\Rules\Longitude;
use Illuminate\Foundation\Http\FormRequest;

class LocationStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:70',
            'address' => 'required',
            // 'city' => 'string',
            'latitude' => ['required', new Latitude],
            'longitude' => ['required', new Longitude]
        ];
    }
    
    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        // Get city from string
        // $city = substr($this->input('address'), strpos($this->input('address'), ',') + 2);
        
        // Reverser geocode coordinates from address
        $coords = \Geocoder::getCoordinatesForAddress($this->input('address'));

        $this->merge([
            'latitude' => $coords['lat'],
            'longitude' => $coords['lng'],
            // 'city' => $city,
        ]);
    }
}
