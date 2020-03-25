<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question', 'hint'
    ];

    public function task()
    {
        return $this->morphOne('App\Task', 'taskable');
    }
}
