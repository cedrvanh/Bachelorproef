<div class="header__menu-user" data-toggle="dropdown">
    <span class="header__menu-user--username">
        Hi, {{ Auth::user()->name }}
    </span>
    <img alt="Profile Pic" src="{{ asset('images/profile.png') }}" class="header__menu-user--picture" />
</div>

<div class="dropdown-menu">
    <a href="/logout" class="dropdown-item">Logout</a>
</div>
