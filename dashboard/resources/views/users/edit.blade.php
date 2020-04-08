@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" value="{{ $user->email }}" name="email">
    </div>
    <div class="form-group">
        <label for="inputName">Full Name</label>
        <input type="text" class="form-control" id="inputName" value="{{ $user->name }}" name="name">
    </div>
    <div class="form-group">
        <label for="inputRole">Role</label>
        <select class="form-control" id="inputRole" name="role">
            @foreach ($roles as $role)
                <option value="{{ $role->id }}" {{ $user->roles->contains($role->id) ? 'selected' : ''}}>{{ $role->name }}</option>
            @endforeach
        </select>
    </div>
@endsection