@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gold</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($characters as $character)
                    <tr>
                        <th scope="row">{{ $character->id }}</th>
                        <td>{{ $character->name }}</td>
                        <td>{{ $character->gold }}</td>
                        @isset($character->user)
                            <td>{{ $character->user->name }}</td>
                        @endisset
                        <td>{{ $character->created_at }}</td>
                        <td>{{ $character->updated_at }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/characters/{{ $character->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/characters/{{ $character->id }}" method="POST">
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