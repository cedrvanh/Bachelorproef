<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Route;
use Faker\Generator as Faker;

$factory->define(Route::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(5),
        'description' => $faker->text(150),
        'thumbnail' => 'https://weekend.knack.be/medias/18289/9364467.jpg',
    ];
});
