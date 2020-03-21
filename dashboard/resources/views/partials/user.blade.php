<span class="header__menu-user--username">
    Hi, {{ Auth::user()->name }}
</span>
<img alt="Profile Pic" src="{{ asset('images/profile.jpg') }}" class="header__menu-user--picture" />
