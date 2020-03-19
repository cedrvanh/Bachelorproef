@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Join Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($characterClasses as $characterClass)
                    <tr>
                        <th scope="row">{{ $characterClass->id }}</th>
                        <td>
                            {{-- <img alt="Class Avatar" src={{ asset("storage/$characterClass->image") }} class="rounded img-fluid" /> --}}
                            {{ $characterClass->name }}
                        </td>
                        <td>{{ $characterClass->description }}</td>
                        <td>{{ $characterClass->created_at }}</td>
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