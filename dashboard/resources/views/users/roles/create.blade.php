@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Role name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter role name" name="name">
    </div>
@endsection
