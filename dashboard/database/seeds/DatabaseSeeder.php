<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleTableSeeder::class);
        $this->call(CityTableSeeder::class);
        $this->call(TaskTypeTableSeeder::class);
        $this->call(ItemTableSeeder::class);
        $this->call(RouteTableSeeder::class);
        $this->call(ClassTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
