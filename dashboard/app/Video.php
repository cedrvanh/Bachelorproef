<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $morphClass = 'Video';

    protected $fillable = [
        'path', 'panorama'
    ];

    public function task()
    {
        return $this->morphOne(Task::class, 'taskable');
    }
}
