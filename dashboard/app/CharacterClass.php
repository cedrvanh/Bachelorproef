<?php

namespace App;

use App\Traits\FtpImageable;
use Illuminate\Database\Eloquent\Model;

class CharacterClass extends Model
{
    use FtpImageable;

    protected $fillable = [
        'name', 'description', 'image', 'model'
    ];

    public function characters()
    {
        return $this->hasMany('App\Character');
    }
}
