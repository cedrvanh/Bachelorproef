<?php

use App\TaskType;
use Illuminate\Database\Seeder;

class TaskTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            ['name' => 'Video', 'description' => 'Display a regular or panorama video in augmented reality '],
            ['name' => 'Media', 'description' => 'Display a regular or panorama image in augmented reality'],
            ['name' => 'Question', 'description' => 'Ask a multiple choice question'],
            ['name' => 'Info', 'description' => 'Preview content about the location in augmented reality'],
        ];

        foreach($types as $type) {
            TaskType::create($type);
        }
    }
}
