<?php

use App\Role;
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
        $role_admin = Role::where('name', 'Admin')->first();
        $role_editor = Role::where('name', 'Editor')->first();

        $admin = factory(App\User::class)->create([
            'name' => 'John Doe',
            'email' => 'test@example.com',
            'password' => bcrypt('secret')
        ]);
        
        $admin->roles()->attach($role_admin);

        $editor = factory(App\User::class)->create([
            'name' => 'Stad Kortrijk',
            'email' => 'test@toerisme.com',
            'password' => bcrypt('secret')
        ]);
        
        $editor->roles()->attach($role_editor);

        factory(App\User::class, 8)
            ->create()
            ->each(function ($user) {
                $role_user = Role::where('name', 'User')->first();

                $user->character()->save(factory(App\Character::class)->create());
                $user->roles()->attach($role_user);
            });
    }
}
