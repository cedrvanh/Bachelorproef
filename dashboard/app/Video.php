<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'path'
    ];

    public function task()
    {
        return $this->morphOne('App\Task', 'taskable');
    }
}
