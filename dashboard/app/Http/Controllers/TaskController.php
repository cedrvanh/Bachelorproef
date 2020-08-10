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

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::paginate(10);
        return view('routes.tasks.index', compact('tasks'));
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

        return view('routes.tasks.create', compact('taskTypes', 'locations'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskStoreRequest $request)
    {
        $type = TaskType::where('id', $request->input('taskType'))->first();
        $task = new Task($request->only('name', 'description', 'reward'));

        switch($type->name) {
            case 'Video':
                $request->validate([
                    'videoPath' => 'bail|required|url|string',
                    'videoPanorama' => 'nullable'
                ]);

                $video = Video::create([
                    'path' => $request->input('videoPath'),
                    'panorama' => $request->input('videoPanorama') ? 1 : 0
                ]);
                $task->taskable()->associate($video);

                break;
            case 'Media':
                $request->validate([
                    'mediaPath' => 'bail|required|url|string',
                    'mediaPanorama' => 'nullable'
                ]);

                $media = Media::create([
                    'path' => $request->input('mediaPath'),
                    'panorama' => $request->input('mediaPanorama') ? 1 : 0
                ]);
                $task->taskable()->associate($media);

                break;
            case 'Question':
                $question = new Question([
                    'text' => $request->input('question'),
                    'hint' => $request->input('hint')
                ]);

                $choices = $request->input('choice');
                collect($choices)->map(function($choice) use ($question) {
                    $newChoice = Choice::create([
                        "answer" => $choice
                    ]);
                    $question->choices()->save($newChoice);
                });
                $question->save();

                $task->taskable()->associate($question);

                break;
            default:
                return;
        }

        $task->save();

        return redirect('tasks')->with('message', 'Task has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        return view('routes.tasks.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return redirect('tasks');
    }
}
