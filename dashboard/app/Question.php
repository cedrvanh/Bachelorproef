<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question', 'hint'
    ];

    public function choices()
    {
        return $this->hasMany('App\Choice');
    }

    public function task()
    {
        return $this->morphOne('App\Task', 'taskable');
    }
}
