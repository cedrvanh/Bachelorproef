<?php

// Parent breadcrumb (Home)
Breadcrumbs::for('home', function($trail) {
    $trail->push('Home', route('home'));
});

// Shorthand for resource routes
Breadcrumbs::macro('resource', function ($name, $title) {
    Breadcrumbs::for("$name.index", function ($trail) use ($name, $title) {
        $trail->parent('home');
        $trail->push($title, route("$name.index"));
    });

    Breadcrumbs::for("$name.create", function ($trail) use ($name) {
        $trail->parent("$name.index");
        $trail->push('New', route("$name.create"));
    });

    Breadcrumbs::for("$name.edit", function ($trail) use ($name) {
        $trail->parent("$name.index");
        $trail->push('Edit', route("$name.edit", 1));
    });
});

// Define breadcrumbs for resource routes
Breadcrumbs::resource('users', 'Users');
Breadcrumbs::resource('routes', 'Routes');
Breadcrumbs::resource('tasks', 'Tasks');
Breadcrumbs::resource('task-types', 'Task Types');
Breadcrumbs::resource('characters', 'Characters');
Breadcrumbs::resource('character-classes', 'Character Classes');
Breadcrumbs::resource('locations', 'Locations');
Breadcrumbs::resource('cities', 'Cities');