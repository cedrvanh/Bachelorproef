@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Location Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter location name" name="name" value="{{ $location->name }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputAddress">Address</label>
            <div class="input-group">
                <input type="text" class="form-control" id="inputAddress" placeholder="Enter location address" name="address" value="{{ $location->address }}">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button" id="openMapBtn" data-toggle="modal" data-target="#mapModal">Open map</button>
                </div>
            </div>
        </div>
    </div>

    <x-modal title="Select an address">
        @include("partials.map")
    </x-modal>
@endsection
