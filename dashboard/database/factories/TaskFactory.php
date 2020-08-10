<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    $types = [
        App\Video::class,
        App\Media::class
    ];
    $randomType = $faker->randomElement($types);
    $type = factory($randomType)->create();
    $location = factory(App\Location::class)->create();

    return [
       'name' => $faker->sentence(3),
       'description' => $faker->text(60),
       'score' => $faker->numberBetween(50, 150),
       'reward' => $faker->numberBetween(5, 20),
       'taskable_type' => $randomType,
       'taskable_id' => $type->id,
       'location_id' => $location->id
    ];
});
