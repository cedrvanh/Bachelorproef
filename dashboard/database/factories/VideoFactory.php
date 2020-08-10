<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Video;
use Faker\Generator as Faker;

$factory->define(Video::class, function (Faker $faker) {
    return [
        'path' => 'https://www.youtube.com/watch?v=IUN664s7N-c',
        'panorama' => $faker->boolean()
    ];
});
