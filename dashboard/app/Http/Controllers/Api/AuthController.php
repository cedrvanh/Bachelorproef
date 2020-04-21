<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signUp(Request $request)
    {
        if(User::where('email', request('email'))->whereNotNull('restore_token')->exists()) {
            dd('exists!');
        }
        else {
            $user = User::create([
                'name' => request('name'),
                'email' => request('email'),
                'password' => Hash::make(request('password')),
                'verify_token' => str_random(60),
                // Attach role
            ]);
        }
        return response()->json($user);
    }

    public function logout()
    {
        $user = Auth::user();
        $user->token()->revoke();
        $user->token()->delete();
        return response()->json(null, 204);
    }

    public function account()
    {
        $user = Auth::user();
        return response()->json($user);
    }

    public function signIn(Request $request) {
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            if(!$user->verified()) {
                dd('user is niet verified');
            }
            else {
                $token = $user->createToken('LaraPassport')->accessToken;
                return response()->json($token, 200);
            }
        } else {
            dd('geen attempt');
        }

    }
}
