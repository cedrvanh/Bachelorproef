<?php

namespace App\Http\Controllers;

use App\Choice;
use App\Http\Requests\TaskStoreRequest;
use App\Location;
use App\Media;
use App\Question;
use App\Task;
use App\TaskType;
use App\Video;
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
        $taskTypes = TaskType::all();
        return view('routes.task-types.index', compact('taskTypes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $taskTypes = TaskType::select('id', 'name')->get();
        $locations = Location::doesntHave('task')->get();

        return view('routes.task-types.create', compact('taskTypes', 'locations'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'string'
        ]);

        $taskType = new TaskType($validated);

        return redirect('task-types')->with('message', 'Task Type: ' . $taskType->name . ' has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(TaskType $taskType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(TaskType $taskType)
    {
        return view('routes.task-types.edit', compact('taskType'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaskType $taskType)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'string'
        ]);

        $taskType->update($validated);

        return redirect('task-types')->with('message', 'Task Type: ' . $taskType->name . ' has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaskType $taskType)
    {
        $taskType->delete();

        return redirect('routes.task-types');
    }
}
