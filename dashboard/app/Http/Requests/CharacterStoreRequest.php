<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CharacterStoreRequest extends FormRequest
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
            'name' => 'required|min:2|max:45',
            'user_id' => 'required|exists:users,id',
            'character_class_id' => 'required|exists:character_classes,id',
            'gender' => 'boolean',
            'gold' => 'integer|nullable'
        ];
    }

    public function messages()
    {
        return [
            'user_id.required' => 'The character needs to be assigned to a user',
            'character_class_id.required' => 'The character needs to be assigned to a class',
        ];
    }
}
