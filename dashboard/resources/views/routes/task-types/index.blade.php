@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Join Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($task_types as $task_type)
                    <tr>
                        <th scope="row">{{ $task_type->id }}</th>
                        <td>{{ $task_type->name }}</td>
                        <td>{{ $task_type->email }}</td>
                        <td>{{ $task_type->created_at }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/task-types/{{ $task_type->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/task-types/{{ $task_type->id }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    
                                    <button type="submit" class="btn btn-danger">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection