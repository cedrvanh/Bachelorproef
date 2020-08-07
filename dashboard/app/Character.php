<?php

namespace App;

use App\Traits\FtpImageable;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use FtpImageable;

    protected $fillable = [
        'name', 'gender', 'gold', 'score', 'user_id', 'character_class_id'
    ];

    public function user()
    {
        return $this->belongsTo(Character::class);
    }

    public function class()
    {
        return $this->belongsTo(CharacterClass::class, 'character_class_id');
    }

    public function items()
    {
        return $this->belongsToMany(Item::class);
    }
}
