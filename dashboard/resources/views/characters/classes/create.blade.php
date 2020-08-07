@extends("layouts.form", [
    'route' => getRoute(),
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter name" name="name" value="{{ old('name') }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputDescription">Description</label>
            <textarea type="text" class="form-control" id="inputDescription" placeholder="Enter a description" name="description" rows="5">{{ old('description') }}</textarea>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputImage">Thumbnail</label>
            <input type="file" class="form-control-file" id="inputImage" name="image" accept="image/*">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputModel">3D Model</label>
            <span class="form-group__sublabel">(Currently only accepts .obj files)</span>
            <input type="file" class="form-control-file" id="inputModel" name="model" accept=".obj">
        </div>
    </div>
@endsection
