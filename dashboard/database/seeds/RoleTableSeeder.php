<?php

use App\Role;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            "name" => "User"
        ]);
        
        Role::create([
            "name" => "Editor"
        ]);

        Role::create([
            "name" => "Admin"
        ]);
    }
}
