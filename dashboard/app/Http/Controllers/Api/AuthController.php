<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function signUp(Request $request)
    {
        // Move to custom validation request?
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        // Create user with hashed password
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($user);

        // if(User::where('email', request('email'))->whereNotNull('restore_token')->exists()) {
        //     dd('exists!');
        // }
        // else {
        //     $user = User::create([
        //         'name' => request('name'),
        //         'email' => request('email'),
        //         'password' => Hash::make(request('password')),
        //         'verify_token' => str_random(60),
        //         // Attach role
        //     ]);
        // }
        // return response()->json($user);
    }

    public function signIn(Request $request)
    {
        // Move to custom validation request?
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        // Attempt to authenticate with given email and password
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            // Create access token with current authenticated user
            $token = $user->createToken($user->email.'-'.now());

            // Send token back to route
            return response()->json([
                'token' => $token->accessToken
            ]);
        }

        // If authenticated user does not exist, return error object
        return response()->json([
            'message' => 'User does not exist'
        ], 404);
    }

    public function signOut()
    {
        // Check if authenticated
        if (Auth::check()) {
            $user = Auth::user();

            // Revoke and delete assigned access tokens
            $user->token()->revoke();
            $user->token()->delete();

            return response()->json([
                'success' => 'You have successfully signed out'
            ]);
        } else {
            return response()->json([
                'error' => 'Something went wrong'
            ], 500);
        }
    }

    public function account()
    {
        $user = Auth::user();
        return response()->json($user);
    }
}
