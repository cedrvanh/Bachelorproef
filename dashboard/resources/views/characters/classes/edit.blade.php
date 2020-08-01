@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="{{ $characterClass->name }}" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <input type="text" class="form-control" id="inputDescription" value="{{ $characterClass->description }}" name="description">
    </div>
    <div class="form-group">
        <label for="inputImage">Image</label>
        <input type="file" class="form-control-file" id="inputImage" name="image">
    </div>
    <div class="form-group">
        <label for="inputModel">Model</label>
        <input type="file" class="form-control-file" id="inputModel" name="model">
    </div>
@endsection
