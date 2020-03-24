<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'name', 'description', 'reward', 'image'
    ];

    public function route()
    {
        $this->belongsTo('App\Route');
    }
}
