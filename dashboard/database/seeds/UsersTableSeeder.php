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
            'name' => 'John Doe',
            'email' => 'test@example.com',
            'password' => bcrypt('secret')
        ]);
        
        factory(App\User::class, 8)
            ->create()
            ->each(function ($user) {
                $user->character()->save(factory(App\Character::class)->create());
            });
    }
}
