@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Visible</label>
            <input type="checkbox" class="js-switch" name="visible" checked />
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter item name" name="name" value="{{ old('name') }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <textarea type="text" class="form-control" id="inputDescription" placeholder="Enter item description" name="description" rows="3">{{ old('description') }}</textarea>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputThumbnail">Thumbnail</label>
            <input type="file" class="form-control-file" id="inputThumbnail" name="thumbnail" accept="image/*">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <span class="form-group__sublabel">(Ingame gold currency)</span>
            <input type="number" class="form-control" id="inputPrice" placeholder="Enter item price" name="price" value="{{ old('price') }}">
        </div>
        <div class="form-group col-md-6">
            <label for="inputExpiration">Expiration Date</label>
            <input type="date" class="form-control" id="inputExpiration" name="expiration_date" value="{{ old('expiration_date') }}">
        </div>
    </div>
@endsection
