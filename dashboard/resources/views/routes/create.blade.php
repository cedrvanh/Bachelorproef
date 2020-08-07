@extends("layouts.form", [
    'route' => Request::segment(1)
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter route name" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea type="number" class="form-control" id="inputDescription" placeholder="Enter a short route description" name="description" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="inputImage">Route thumbnail</label>
        <input type="file" class="form-control-file" id="inputImage" name="image">
    </div>
@endsection
