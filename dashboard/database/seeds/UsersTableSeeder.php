<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->create([
            'email' => 'test@example.com',
            'password' => bcrypt('secret'),
            'name' => 'John Doe'
        ]);
        
        factory(App\User::class, 8)->create();
    }
}
