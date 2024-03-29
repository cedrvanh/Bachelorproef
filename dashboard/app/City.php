<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'name'
    ];

    public function locations()
    {
        return $this->hasMany('App\Location');
    }

    public function routes()
    {
        return $this->hasMany('App\Route');
    }
}
