<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $fillable = [
        'content'
    ];

    public function task()
    {
        return $this->morphOne('App\Task', 'taskable');
    }
}
