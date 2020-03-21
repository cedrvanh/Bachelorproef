@extends("layouts.form", [
    'route' => Request::segment(1)
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Character Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter character name" name="name">
    </div>
    <div class="form-group">
        <label for="inputGold">Gold</label>
        <input type="number" class="form-control" id="inputGold" placeholder="Enter the amount of gold" name="gold">
    </div>
    <div class="divider"></div>
    <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
@endsection