@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter location name" name="name">
    </div>
    <div class="form-group">
        <label for="inputAddress">Address</label>
        <div class="input-group">
            <input type="text" class="form-control" id="inputAddress" placeholder="Enter location address" name="address">
            <div class="input-group-append">
                <button class="btn btn-secondary" type="button" id="mapBtn">Open map</button>
            </div>
        </div>
    </div>
@endsection