<?php

namespace App;

use App\Traits\FtpImageable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Character extends Model
{
    use FtpImageable;

    protected $fillable = [
        'name', 'gender', 'gold', 'score', 'user_id', 'character_class_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function class()
    {
        return $this->belongsTo(CharacterClass::class, 'character_class_id');
    }

    public function items()
    {
        return $this->belongsToMany(Item::class)->orderBy('expiration_date');
    }

    public function scopeAvailableItems()
    {
        $ids = DB::table('character_item')->where('character_id', '=', $this->id)->pluck('item_id');
        return Item::whereNotIn('id', $ids)->get();
    }
}
