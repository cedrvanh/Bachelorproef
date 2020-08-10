<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'name', 'address', 'longitude', 'latitude'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function task()
    {
        return $this->hasOne(Task::class);
    }
}
