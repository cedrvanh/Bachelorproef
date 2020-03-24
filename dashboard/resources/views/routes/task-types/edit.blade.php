@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="{{ $taskType->name }}" name="name">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea type="number" class="form-control" id="inputDescription" name="description" rows="3">{{ $taskType->description }}</textarea>
    </div>
@endsection