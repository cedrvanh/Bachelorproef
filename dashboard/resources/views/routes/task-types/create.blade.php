@extends("layouts.form", [
    'route' => Request::segment(1)
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter task type name" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea type="number" class="form-control" id="inputDescription" placeholder="Enter a short task type description" name="description" rows="3"></textarea>
    </div>
    <div class="divider"></div>
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
@endsection