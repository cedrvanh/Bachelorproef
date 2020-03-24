<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'name', 'longitude', 'latitude'
    ];

    public function city()
    {
        $this->belongsTo('App\City');
    }
}
