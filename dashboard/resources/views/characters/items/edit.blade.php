@extends("layouts.form", [
    'route' => getRoute(),
    'method' => 'PUT'
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group  col-md-12">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" value="{{ $item->name }}" name="name">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <input type="text" class="form-control" id="inputDescription" value="{{ $item->description }}" name="description">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputImage">Thumbnail</label>
            <input type="file" class="form-control-file" id="inputImage" name="image">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <span class="form-group__sublabel">(Ingame gold currency)</span>
            <input type="number" class="form-control" id="inputPrice" placeholder="Enter item price" name="price" value="{{ $item->price }}">
        </div>
        <div class="form-group col-md-6">
            <label for="inputExpiration">Expiration Date</label>
            <input type="date" class="form-control" id="inputExpiration" name="expiration_date" value="{{ $item->expiration }}">
        </div>
    </div>
@endsection
