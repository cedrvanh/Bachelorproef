<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{
    protected $fillable = [
        'choice', 'correct'
    ];

    public function question()
    {
        return $this->belongsTo('App\Question');
    }
}
