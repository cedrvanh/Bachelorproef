<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Location;
use Faker\Generator as Faker;

$factory->define(Location::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(3),
        'address' => $faker->streetAddress,
        'latitude' => $faker->latitude(50, 60),
        'longitude' => $faker->longitude(2, 4)
    ];
});
