@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount of users with role</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($roles as $role)
                    <tr>
                        <th scope="row">{{ $role->id }}</th>
                        <td>
                            <x-badge :name="$role->name" class="p-2" />
                        </td>
                        <td>{{ $role->users_count }}</td>
                        <td>{{ $role->created_at }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/roles/{{ $role->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/roles/{{ $role->id }}" method="POST">
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