<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $morphClass = 'Media';

    protected $fillable = [
        'path', 'panorama'
    ];

    public function task()
    {
        return $this->morphOne(Task::class, 'taskable');
    }
}
