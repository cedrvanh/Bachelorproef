<?php

namespace App\Http\Controllers;

use App\CharacterClass;
use App\Http\Requests\CharacterClassStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CharacterClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $characterClasses = CharacterClass::all();
        return view('characters.classes.index', compact('characterClasses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('characters.classes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CharacterClassStoreRequest $request)
    {
        $validated = $request->validated();
        
        // Store image with slugified name
        $file = $request->file('image');
        $path = $file->storeAs(
            'images/character-classes', Str::slug($request->name). '.' .$file->extension()
        );

        // Save new class record
        $characterClass = new CharacterClass($validated);
        $characterClass->image = $path;
        $characterClass->save();

        return redirect('character-classes');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CharacterClass  $CharacterClass
     * @return \Illuminate\Http\Response
     */
    public function show(CharacterClass $CharacterClass)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CharacterClass  $CharacterClass
     * @return \Illuminate\Http\Response
     */
    public function edit(CharacterClass $CharacterClass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CharacterClass  $CharacterClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CharacterClass $CharacterClass)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CharacterClass  $CharacterClass
     * @return \Illuminate\Http\Response
     */
    public function destroy(CharacterClass $CharacterClass)
    {
        $characterClass = CharacterClass::findOrFail($CharacterClass->id);
        $characterClass->delete();

        return redirect('character-classes');
    }
}
