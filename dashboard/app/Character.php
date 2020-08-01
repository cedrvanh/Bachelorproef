<?php

namespace App;

use App\Traits\FtpImageable;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use FtpImageable;

    protected $fillable = [
        'name', 'gender', 'gold', 'user_id', 'character_class_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function class()
    {
        return $this->belongsTo('App\CharacterClass', 'character_class_id');
    }

    public function items()
    {
        return $this->hasMany('App\Item');
    }
}
