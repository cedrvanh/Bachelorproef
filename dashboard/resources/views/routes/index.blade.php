@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($routes as $route)
                    <tr>
                        <th scope="row">{{ $route->id }}</th>
                        <td>{{ $route->name }}</td>
                        <td>{{ $route->created_at }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/routes/{{ $route->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/routes/{{ $route->id }}" method="POST">
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
