@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <div class="card">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                <form class="form" action="/users/{{ $user->id }}" method="POST">
                        @csrf
                        @method('PUT')
                        <h3 class="mt-3 mb-5">Edit a user</h3>
                        <div class="form__section">
                            <div class="form-group">
                                <label for="inputEmail">Email address</label>
                                <input type="email" class="form-control" id="inputEmail" value="{{ $user->email }}" name="email">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Full Name</label>
                                <input type="text" class="form-control" id="inputName" value="{{ $user->name }}" name="name">
                            </div>
                            <div class="divider"></div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection