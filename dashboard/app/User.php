<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use League\OAuth2\Server\Exception\OAuthServerException;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'verify_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Relations
     */
    public function character()
    {
        return $this->hasOne(Character::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Helpers
     */
    // Returns all users without a character
    public static function withoutCharacter()
    {
        return self::has('character', '<', 1)->get();
    }

    // Assign a role to the user by name
    public function assignRole($name)
    {
        $role = Role::where('name', $name)->first();
        return $this->roles()->sync($role->id);
    }

    // Returns the role of the user
    public function getRole()
    {
        return $this->roles->first()->name;
    }

    // Checks if user has a certain role by name
    public function hasRole($role)
    {
        return null !== $this->roles()->where('name', $role)->first();
    }

    // Checks if user has any roles assigned
    public function hasAnyRole($roles)
    {
        return null !== $this->roles()->whereIn(‘name’, $roles)->first();
    }

    // Checks if user is verified
    public function verified()
    {
        return $this->verify_token === null;
    }

    // Checks if user has been disabled
    public function disabled()
    {
        return $this->restore_token !== null;
    }

    // Checks if user exists
    public function exists()
    {
        return $this->email !== null;
    }

    public function validatePassport($password) {
        if(Hash::check($password, $this->getAuthPassword())) {
            if($this->verify_token === null) {
                return true;
            } else {
                throw new OAuthServerException('Please verify your account before signing in.', 6, 'account_inactive', 401);
            }
        }
    }
}
