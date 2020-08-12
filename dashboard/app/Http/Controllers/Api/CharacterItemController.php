<?php

namespace App\Http\Controllers\Api;

use App\Character;
use App\Item;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Request;

class CharacterItemController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function index(Character $character)
    {
        $items = $character->items->where('expiration_date', '>', Carbon::now());
        return ItemResource::collection($items);
    }

    public function store(Request $request, $characterId, $itemId)
    {
        $character = Character::find($characterId);
        $item = Item::find($itemId);
        $character->items()->attach($item);
    }
}
