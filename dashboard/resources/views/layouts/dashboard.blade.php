<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            @include("partials.sidebar")

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
                <div class="row">
                    @include("partials.header")
                    
                    <div class="container-fluid">
                        <div class="row">
                            @include("partials.subheader")
                        </div>
                        <div class="row justify-content-center">
                            @yield("content")
                        </div>
                    </div>
                </div>
            </main>
        </div>

        @include("partials.flash", [
            "flash" => "User was created"
        ])
    </div>
</body>
</html>