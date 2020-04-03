<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name', 'gender', 'gold'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function class()
    {
        return $this->belongsTo('App\CharacterClass', 'character_class_id');
    }

    public function items()
    {
        return $this->hasMany('App\Item');
    }
}