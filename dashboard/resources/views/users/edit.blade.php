@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <div class="card">
            <div class="row">
                <div class="col-lg-7 mx-auto">
                    <form class="form">
                        <h3 class="mt-3 mb-5">Edit user</h3>
                        <div class="form__section">
                            <div class="form-group">
                                <label for="inputEmail">Email address</label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="inputName">Full Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Enter full name">
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">Password</label>
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                            </div>
                            <div class="divider"></div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection