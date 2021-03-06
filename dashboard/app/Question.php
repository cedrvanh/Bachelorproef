<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'text', 'hint'
    ];

    public function choices()
    {
        return $this->hasMany(Choice::class);
    }

    public function task()
    {
        return $this->morphOne(Task::class, 'taskable');
    }
}
