@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Full Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter full name" name="name">
    </div>
@endsection