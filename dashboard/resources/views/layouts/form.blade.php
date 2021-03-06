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

    @yield("scripts")
    
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
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
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-lg-6 mx-auto">
                                            @include("partials.form-elements.form", [
                                                'route' => $route,
                                                'name' => Str::singular($route),
                                                'method' => $method ?? null
                                            ])
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>
</html>