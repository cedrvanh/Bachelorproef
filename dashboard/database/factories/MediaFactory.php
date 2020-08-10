<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Media;
use Faker\Generator as Faker;

$factory->define(Media::class, function (Faker $faker) {
    $images = [
        'https://weekend.knack.be/medias/18289/9364467.jpg',
        'https://www.neweuropetours.eu/wp-content/uploads/2018/09/mun-castle-21-1600x900.jpg',
        'https://www.arundelcastle.org/wp-content/uploads/2019/11/Castle-History-Arundel-Castle-3rd-June-2019-27.jpg',
        'https://www.ancient.eu/img/c/p/1200x627/11517.jpg?v=1574846929'
    ];
    $randomImage = $faker->randomElement($images);

    return [
        'path' => $randomImage,
        'panorama' => $faker->boolean()
    ];
});
