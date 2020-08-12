<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Location;
use Faker\Generator as Faker;

$factory->define(Location::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(3),
        'address' => $faker->streetAddress,
        'latitude' => $faker->latitude(50.80, 50.90), // Near my location
        'longitude' => $faker->longitude(3.20, 3.30)
    ];
});
