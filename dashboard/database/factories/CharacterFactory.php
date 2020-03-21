<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(App\Character::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'gold' => $faker->randomDigit
    ];
});
