<?php

Breadcrumbs::for('home', function($trail) {
    $trail->push('Home', route('home'));
});

Breadcrumbs::for('users', function($trail) {
    $trail->parent('home');
    $trail->push('Users', route('home'));
});