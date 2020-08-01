@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <div class="card">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    <form class="form" action="/character-classes" method="POST" enctype="multipart/form-data">
                        @csrf
                        <h3 class="mt-3 mb-5">Create a character class</h3>
                        <div class="form__section">
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Enter name" name="name">
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Description</label>
                                <input type="text" class="form-control" id="inputDescription" placeholder="Enter a description" name="description">
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Image</label>
                                <input type="file" class="form-control-file" id="inputImage" name="image">
                            </div>
                            <div class="form-group">
                                <label for="inputModel">Model</label>
                                <input type="file" class="form-control-file" id="inputModel" name="model">
                            </div>
                            <div class="divider"></div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
