@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form class="form" action="/{{ $route }}" method="POST" enctype="multipart/form-data">
    @csrf
    @isset($method)
        @method('{{ $method }}')
    @endisset
    <h3 class="mt-3 mb-5">Create a {{ $name }}</h3>
    <div class="form__section">
        @yield('form-fields')
    </div>
</form>