<?php

use App\CharacterClass;
use Illuminate\Database\Seeder;

class ClassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $classes = [
            ['name' => 'Knight', 'description' => 'A brave knight', 'image' => 'images/character-classes/knight.png'],
            ['name' => 'Ranger', 'description' => 'An agile ranger', 'image' => 'images/character-classes/knight.png'],
            ['name' => 'Mage', 'description' => 'A smart mage', 'image' => 'images/character-classes/knight.png']
        ];

        foreach($classes as $class) {
            CharacterClass::create($class);
        }
    }
}
