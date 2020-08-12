<?php

namespace App\Http\Controllers\Api;

use App\Character;
use App\Http\Controllers\Controller;
use App\Http\Requests\CharacterStoreRequest;
use App\Http\Resources\CharacterResource;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $characters = Character::with('class')->paginate(15);

        if  ($request->has('sort')) {
            $characters = Character::orderBy($request->sort, 'DESC')->paginate(15);
        }

        return CharacterResource::collection($characters);
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
        $task = Character::findOrFail($id);
        return new CharacterResource($task);
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
        $task = Character::findOrFail($id);
        $task->delete();
        return new CharacterResource($task);
    }
}
