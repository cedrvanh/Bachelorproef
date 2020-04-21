<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use League\OAuth2\Server\Exception\OAuthServerException;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

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

    public function character()
    {
        return $this->hasOne('App\Character');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function getRole()
    {
        return $this->roles->first()->name;
    }

    public function hasRole($role)
    {
        return null !== $this->roles()->where('name', $role)->first();
    }

    public function hasAnyRole($roles)
    {
        return null !== $this->roles()->whereIn(‘name’, $roles)->first();
    }

    public function verified()
    {
        return $this->verify_token === null;
    }

    public function disabled()
    {
        return $this->restore_token !== null;
    }

    public function exists()
    {
        return $this->email !==null;
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
