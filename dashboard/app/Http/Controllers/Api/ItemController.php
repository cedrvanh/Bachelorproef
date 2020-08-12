<?php

namespace App\Http\Controllers\Api;

use App\Character;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use App\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = Item::all();

        if ($request->has('user')) {
            $character = Character::where('id', $request->user)->first();
            $items = $character->availableItems(); // Get items that do not exist in pivot table with user - scope in Character model
        }

        return ItemResource::collection($items);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CharacterStoreRequest $request)
    {
        $character = Character::firstOrCreate((
            [
                'name' => $request->name,
                'gender' => $request->gender,
                'gold' => $request->gold,
                'user_id' => $request->user,
                'character_class_id' => $request->class,
            ]
        ));

        return new CharacterResource($character);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::findOrFail($id);
        return new ItemResource($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Character::findOrFail($id);
        $task->update($request->all());
        return new CharacterResource($task);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::findOrFail($id);
        $item->delete();
        return new CharacterResource($item);
    }
}
