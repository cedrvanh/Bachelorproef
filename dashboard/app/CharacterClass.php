<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CharacterClass extends Model
{
    protected $fillable = [
        'name', 'description', 'image'
    ];

    // Update character timestamps when given class changes
    protected $touches = ['character'];

    public function character() 
    {
        return $this->belongsTo('App\Character');
    }
}
