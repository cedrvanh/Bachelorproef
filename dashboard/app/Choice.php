<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{
    protected $fillable = [
        'answer', 'correct'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
