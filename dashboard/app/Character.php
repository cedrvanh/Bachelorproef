<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name', 'coins'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function characterClass()
    {
        return $this->belongsTo('App\CharacterClass');
    }
}