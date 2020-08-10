<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Item;
use Faker\Generator as Faker;

$factory->define(Item::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(5),
        'description' => $faker->text(150),
        'price' => $faker->numberBetween(10, 30),
        'discount' => $faker->numberBetween(15, 100),
        'expiration_date' => $faker->dateTimeBetween('2 weeks', '6 months'),
        'visible' => 1,
        'barcode' => 'https://pngimg.com/uploads/barcode/barcode_PNG8.png'
    ];
});
