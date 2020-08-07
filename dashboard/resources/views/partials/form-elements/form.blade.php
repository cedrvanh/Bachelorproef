<form class="form" action="/{{ $route }}" method="POST" enctype="multipart/form-data">
    @csrf
    @isset($method)
        @method($method)
    @endisset
    <h3 class="mt-3 mb-4">{{ $method ? 'Edit ' . $route : 'Create a ' . Str::singular($route) }}</h3>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="form__section mt-5">
        @yield('form-fields')
        <div class="divider"></div>
        <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">{{ $method ? 'Save' : 'Create' }}</button>
        </div>
    </div>
</form>
