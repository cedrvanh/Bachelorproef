<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(App\Character::class, function (Faker $faker) {
    // Populate foreign keys
    $characterClassId = App\CharacterClass::all()->random()->id;
    $userId = App\User::all()->random()->id;

    return [
        'name' => $faker->name,
        'gold' => $faker->randomDigit,
        'score' => $faker->numberBetween(0, 200),
        'gender' => $faker->boolean(),
        'character_class_id' => $characterClassId,
        'user_id' => $userId
    ];
});
