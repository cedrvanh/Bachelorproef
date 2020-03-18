<?php

namespace App\Http\Controllers;

use App\CharacterClass;
use Illuminate\Http\Request;

class CharacterClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'Character Class Pagina';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
    }
}
