<?php

use App\City;
use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            ['name' => 'Kortrijk'],
            ['name' => 'Gent'],
            ['name' => 'Brussel'],
        ];

        foreach($cities as $city) {
            City::create($city);
        }
    }
}
