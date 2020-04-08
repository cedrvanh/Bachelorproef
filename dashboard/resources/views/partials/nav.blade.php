<ul class="sidebar__menu nav my-3">
    <li class="nav__item-section">
        <h6 class="text-uppercase">Menu</h6>
    </li>
    <li class="nav__item">
        <a class="nav__link collapsed" data-toggle="collapse" data-target="#dropdown1">
            <i data-feather="mail" class="nav__link-icon"></i>
            <span class="nav__link-text">Routes</span>
            <i data-feather="chevron-down"></i>
        </a> 
        <div class="collapse" id="dropdown1" aria-expanded="false">
            <ul class="nav flex-column">
                <li class="nav__item">
                    <a class="nav-link" href="{{ route('routes.index') }}">
                        <span class="nav__link-text">Routes</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a class="nav-link" href="{{ route('tasks.index') }}">
                        <span class="nav__link-text">Tasks</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a class="nav-link" href="/task-types">
                        <span class="nav__link-text">Task Types</span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
    <li class="nav__item">
        <a class="nav__link collapsed" data-toggle="collapse" data-target="#dropdown3">
            <i data-feather="globe" class="nav__link-icon"></i>
            <span class="nav__link-text">Locations</span>
            <i data-feather="chevron-down"></i>
        </a>
        <div class="collapse" id="dropdown3" aria-expanded="false">
            <ul class="nav flex-column">
                <li class="nav__item">
                    <a class="nav-link" href="{{ route('cities.index') }}">
                        <span class="nav__link-text">Cities</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a class="nav-link" href="{{ route('locations.index') }}">
                        <span class="nav__link-text">Locations</span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
    @if(Auth::user()->hasRole('Admin'))
        <li class="nav__item">
            <a class="nav__link collapsed" data-toggle="collapse" data-target="#dropdown2">
                <i data-feather="database" class="nav__link-icon"></i>
                <span class="nav__link-text">Characters</span>
                <i data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="dropdown2" aria-expanded="false">
                <ul class="nav flex-column">
                    <li class="nav__item">
                        <a class="nav-link" href="{{ route('characters.index') }}">
                            <span class="nav__link-text">Characters</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav-link"href="{{ route('character-classes.index') }}">
                            <span class="nav__link-text">Classes</span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav__item">
            <a class="nav__link collapsed" data-toggle="collapse" data-target="#dropdown4">
                <i data-feather="user" class="nav__link-icon"></i>
                <span class="nav__link-text">Auth</span>
                <i data-feather="chevron-down"></i>
            </a>
            <div class="collapse" id="dropdown4" aria-expanded="false">
                <ul class="nav flex-column">
                    <li class="nav__item">
                        <a class="nav-link" href="{{ route('users.index') }}">
                            <span class="nav__link-text">Users</span>
                        </a>
                    </li>
                    <li class="nav__item">
                        <a class="nav-link"href="{{ route('roles.index') }}">
                            <span class="nav__link-text">Roles</span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    @endif
</ul>