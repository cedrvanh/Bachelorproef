<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CharacterClass extends Model
{
    protected $fillable = [
        'name', 'description', 'image'
    ];
}