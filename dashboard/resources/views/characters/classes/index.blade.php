@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($characterClasses as $characterClass)
                    <tr>
                        <th scope="row">{{ $characterClass->id }}</th>
                        <td>
                            <div class="card-user">
                                {{-- <img alt="Class Avatar" src={{ asset($characterClass->image) }} class="card-user__avatar" /> --}}
                                <span>{{ $characterClass->name }}</span>
                            </div>
                        </td>
                        <td>{{ $characterClass->description }}</td>
                        <td>{{ $characterClass->created_at }}</td>
                        <td>{{ $characterClass->updated_at }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/character-classes/{{ $characterClass->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/character-classes/{{ $characterClass->id }}" method="POST">
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
