<?php

namespace App\Http\Controllers;

use App\TaskType;
use Illuminate\Http\Request;

class TaskTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $task_types = TaskType::all();
        return view('routes.task-types.index', compact('task_types'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('routes.task-types.create');
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
     * @param  \App\TaskType  $taskType
     * @return \Illuminate\Http\Response
     */
    public function show(TaskType $taskType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TaskType  $taskType
     * @return \Illuminate\Http\Response
     */
    public function edit(TaskType $taskType)
    {
        return view('routes.task-types.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TaskType  $taskType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaskType $taskType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TaskType  $taskType
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaskType $taskType)
    {
        //
    }
}
