@extends("layouts.form", [
    'route' => Request::segment(1)
])

@section("form-fields")
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
        <label for="inputName">Full Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter full name" name="name">
    </div>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Password" name="password">
    </div>
    <div class="form-group">
        <label for="inputRole">Role</label>
        <select class="form-control" id="inputRole">
            @foreach ($roles as $role)
                <option value="{{ $loop->iteration }}">{{ $role->name }}</option>
            @endforeach
        </select>
    </div>
@endsection