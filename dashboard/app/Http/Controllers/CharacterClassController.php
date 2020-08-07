<?php

namespace App\Http\Controllers;

use App\CharacterClass;
use App\Traits\FtpImageable;
use App\Http\Requests\CharacterClassStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CharacterClassController extends Controller
{
    use FtpImageable;

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

        // Save new class record
        $characterClass = new CharacterClass($validated);

        if ($request->has('image')) {
            $file = $request->file('image');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/character-classes', $name);

            $characterClass->image = $name;
        }

        if ($request->has('model')) {
            $file = $request->file('model');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/character-classes/models', $name);

            $characterClass->model = $name;
        }

        $characterClass->save();

        return redirect('character-classes')->with('message', $characterClass->name . ' has been created');
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
     * @param  \App\CharacterClass  $characterClass
     * @return \Illuminate\Http\Response
     */
    public function edit(CharacterClass $characterClass)
    {
        return view('characters.classes.edit', compact('characterClass'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CharacterClass  $CharacterClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CharacterClass $characterClass)
    {
        $characterClass->update([
            'name' => $request->name,
            'model' => $request->model
        ]);

        if ($request->has('image')) {
            $file = $request->file('image');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/character-classes', $name);

            $characterClass->update([
                'image' => $name
            ]);
        }

        if ($request->has('model')) {
            $file = $request->file('model');
            $name = Str::slug($request->name) . '.' . $file->getClientOriginalExtension();

            // Store image with slugified name
            $this->uploadImage($file, 'images/character-classes/models', $name);

            $characterClass->update([
                'model' => $name
            ]);
        }

        $characterClass->save();

        return redirect('character-classes')->with('message', $characterClass->name . ' has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CharacterClass  $characterClass
     * @return \Illuminate\Http\Response
     */
    public function destroy(CharacterClass $characterClass)
    {
        $characterClass->delete();

        return redirect('character-classes')->with('message', $characterClass->name . ' has been deleted');
    }
}
