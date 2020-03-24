@php
    // Get route segment (i.e. /routes, /characters, ..)
    $route = Request::segment(1);
    // Make route singular and capitalize
    $formattedRoute = Str::singular(Str::title($route));
@endphp

<div class="subheader col-lg-12">
    <div class="subheader__main">
        <h4 class="subheader__main-title">Dashboard</h4>
        <div class="subheader__breadcrumbs">
            <span class="subheader__breadcrumbs--link">Home</span>
        </div>
    </div>
    <div class="subheader__actions">
        <a class="btn btn-primary" href="/{{ $route }}/create">
            Add {{ replaceDash($formattedRoute) }}
        </a>
    </div>
</div>