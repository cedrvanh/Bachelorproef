<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    protected $fillable = [
        'name', 'description', 'thumbnail', 'status' 
    ];

    public function city()
    {
        $this->belongsTo('App\City');
    }

    public function tasks()
    {
        $this->hasMany('App\Task');
    }
}
