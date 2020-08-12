<?php

namespace App\Http\Controllers\Api;

use App\Character;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use Illuminate\Support\Carbon;

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
}
