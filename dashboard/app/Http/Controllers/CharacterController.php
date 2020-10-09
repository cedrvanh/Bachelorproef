<?php

namespace App\Http\Controllers;

use App\Character;
use App\CharacterClass;
use App\User;
use App\Http\Requests\CharacterStoreRequest;
use App\Http\Requests\CharacterUpdateRequest;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $characters = Character::paginate(10);

        return view('characters.index', compact('characters'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $characterClasses = CharacterClass::all();
         // Select user without assigned character - defined in model (User.php)
        $users = User::withoutCharacter();

        return view('characters.create', compact('characterClasses', 'users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $character = new Character($request->all());
        $character->save();

        return redirect('characters')->with('message', $character->name . ' has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Character  $character
     * @return \Illuminate\Http\Response
     */
    public function show(Character $character)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Character  $character
     * @return \Illuminate\Http\Response
     */
    public function edit(Character $character)
    {
        $characterClasses = CharacterClass::all();
        // Select user without assigned character - defined in model (User.php)
        $users = User::withoutCharacter();

        return view('characters.edit', compact('character', 'characterClasses', 'users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Character  $character^
     * @return \Illuminate\Http\Response
     */
    public function update(CharacterUpdateRequest $request, Character $character)
    {
        $character->update($request->all());
        $character->save();

        return redirect('characters')->with('message', $character->name . ' has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Character  $character
     * @return \Illuminate\Http\Response
     */
    public function destroy(Character $character)
    {
        $character->delete();

        return redirect('characters')->with('message', $character->name . ' has been deleted');
    }
}
