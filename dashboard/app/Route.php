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
        return $this->belongsTo(City::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
