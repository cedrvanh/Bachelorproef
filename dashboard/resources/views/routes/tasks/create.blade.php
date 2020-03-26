@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter task name" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea class="form-control" id="inputDescription" placeholder="Enter a short task description" name="description" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="inputReward">Reward</label>
        <input type="number" class="form-control" id="inputReward" placeholder="Enter the reward" name="reward">
    </div>
    <div class="form-group">
        <label for="inputImage">Optional Image</label>
        <input type="file" class="form-control-file" id="inputImage" name="image">
    </div>    
    <div class="form-group">
        <label for="taskType">Select the task type</label>
        <select class="form-control" id="taskType">
            @foreach($taskTypes as $taskType)
                <option>{{ $taskType }}</option>
            @endforeach
        </select>
    </div>
@endsection