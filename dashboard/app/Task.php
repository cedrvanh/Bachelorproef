<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'name', 'description', 'reward', 'image'
    ];

    public function taskable()
    {
        return $this->morphTo();
    }

    public function route()
    {
        return $this->belongsTo(Route::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
