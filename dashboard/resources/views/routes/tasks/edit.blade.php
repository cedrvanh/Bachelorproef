@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter task name" name="name" value="{{ $task->name }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <textarea class="form-control" id="inputDescription" placeholder="Enter a short task description" name="description" rows="3">{{ $task->description }}</textarea>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputLocation">Assign a location</label>
            <select class="form-control js-select" id="inputLocation" name="location">
                <option selected disabled>Select a location</option>
                @foreach ($locations as $location)
                    <option value="{{ $location->id }}">{{ $location->name }}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputReward">Reward <span class="form-group__sublabel">(amount of gold earned from completing task)</span></label>
            <input type="number" class="form-control" id="inputReward" placeholder="Enter the reward" name="reward" value="{{ $task->reward }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputImage">Optional Image</label>
            <input type="file" class="form-control-file" id="inputImage" name="image">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="taskType">Select the task type</label>
            <select class="form-control" id="taskType" name="taskType">
                <option selected disabled></option>
                @foreach($taskTypes as $taskType)
                    <option value="{{ $taskType->id }}">{{ $taskType->name }}</option>
                @endforeach
            </select>
        </div>
    </div>

    @foreach($taskTypes as $taskType)
        @includeIf("partials.form-elements." . Str::slug($taskType->name), [
            "iteration" => $loop->iteration
        ])
    @endforeach
@endsection
