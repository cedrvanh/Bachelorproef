@extends("layouts.form", [
    'route' => Request::segment(1)
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter task name" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea type="number" class="form-control" id="inputDescription" placeholder="Enter a short task description" name="description" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="inputReward">Reward</label>
        <input type="number" class="form-control" id="inputReward" placeholder="Enter the reward" name="reward">
    </div>
    <div class="form-group">
        <label for="inputImage">Optional Image</label>
        <input type="file" class="form-control-file" id="inputImage" name="image">
    </div>
    <div class="divider"></div>
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
@endsection