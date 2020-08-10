@extends("layouts.form", [
    'route' => getRoute()
])

@section("form-fields")
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter route name" name="name" value="{{ old('name') }}">
    </div>
    <div class="form-group">
        <label for="inputDescription">Description</label>
        <textarea type="number" class="form-control" id="inputDescription" placeholder="Enter a short route description" name="description" rows="3">{{ old('description') }}</textarea>
    </div>
    <div class="form-group">
        <label for="inputImage">Route thumbnail</label>
        <input type="file" class="form-control-file" id="inputImage" name="image">
    </div>
    <label for="inputLocationOne">Assign a task <span class="form-group__sublabel">(Max 6 tasks per route - Grab handle to sort)</span></label>
    <div class='js-sort'>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationOne" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationTwo" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationThree" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationFour" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationFive" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <span class="sort-handle">::</span>
            <select class="form-control js-select" id="inputLocationSix" name="task[]">
                <option selected disabled>Select a task</option>
                @foreach ($tasks as $task)
                    <option value="{{ $task->id }}">{{ $task->name }}</option>
                @endforeach
            </select>
        </div>
    </div>
@endsection
