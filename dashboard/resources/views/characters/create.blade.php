@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputName">Character Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter character name" name="name" value="{{ old('name') }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="genderMale" value="0" checked>
                <label class="form-check-label" for="genderMale">Male</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="1"  @if(old('gender')) checked @endif>
                <label class="form-check-label" for="genderFemale">Female</label>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-5">
            <label for="inputCharacterClass">Character Class</label>
            <select class="form-control" id="inputRole" name="character_class_id">
                <option selected disabled>Select a class</option>
                @foreach ($characterClasses as $characterClass)
                    <option value="{{ $characterClass->id }}" {{ old('character_class_id') == $characterClass->id ? 'selected': '' }}>{{ $characterClass->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group col-md-7">
            <label for="inputGold">Gold</label>
            <input type="number" class="form-control" id="inputGold" placeholder="Enter the amount of gold" name="gold" value="{{ old('gold') }}">
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="inputUser">Assign a user with no current character</label>
            <select class="form-control js-select" id="inputUser" name="user_id">
                <option selected disabled>Select a user</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}" {{ old('user_id') == $user->id ? 'selected': '' }}>{{ $user->name }}</option>
                @endforeach
            </select>
        </div>
    </div>
@endsection
