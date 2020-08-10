<?php

use Illuminate\Database\Seeder;

class RouteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate routes with tasks
        factory(App\Route::class, 5)
            ->create()
            ->each(function ($route, $index) {
                $route->tasks()->createMany(factory(App\Task::class, 3)->make()->toArray());
            });

        // Generate tasks without route
        factory(App\Task::class, 10)->create();
    }
}
