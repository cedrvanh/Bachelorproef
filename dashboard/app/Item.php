<?php

namespace App;

use App\Traits\Hideable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Item extends Model
{
    use Hideable;


    protected $dates = ['expiration_date'];

    protected $fillable = [
        'name', 'description', 'price', 'image', 'visible', 'expiration_date'
    ];

    public $visibilityField = 'visible'; // default value

    public function characters()
    {
        return $this->belongsToMany(Character::class);
    }

    public function getExpirationAttribute()
    {
        return Carbon::parse($this->expiration_date)->toDateString();
    }
}
