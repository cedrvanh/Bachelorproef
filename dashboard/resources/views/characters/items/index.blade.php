@extends("layouts.dashboard")

@section("content")
    <div class="col-lg-12">
        <table class="table table--white">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Expiration Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($items as $item)
                    <tr>
                        <th scope="row">{{ $item->id }}</th>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->price }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td>{{ $item->expiration_date }}</td>
                        <td>
                            <div class="table__actions">
                                <a href="/items/{{ $item->id }}/edit" class="btn btn-warning mr-2">
                                    Edit
                                </a>
                                <form action="/items/{{ $item->id }}" method="POST">
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
