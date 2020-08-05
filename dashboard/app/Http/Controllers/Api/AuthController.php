<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\SignInRequest;
use App\Http\Requests\Api\SignUpRequest;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function signUp(SignUpRequest $request)
    {
        $userExists = User::where('email', $request->email)->whereNotNull('restore_token')->exists();

        // Create user with hashed password
        if (!$userExists) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'verify_token' => Str::random(60)
            ]);

            // Assign default app User role
            $user->assignRole('user');

            // Create access token for new user
            $token = $user->createToken($user->email.'-'.now());

            return response()->json([
                'user' => $user->id,
                'token' => $token->accessToken
            ]);
        }

        return response()->json([
            'message' => 'A user with this email address already exists'
        ], 404);
    }

    public function signIn(SignInRequest $request)
    {
        // Attempt to authenticate with given email and password
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            // Create access token for current authenticated user
            $token = $user->createToken($user->email.'-'.now());

            // Send token back to route
            return response()->json([
                'token' => $token->accessToken
            ]);
        }

        // If authenticated user combination does not exist, return error object
        return response()->json([
            'message' => 'User does not exist',
            'errors' => [
                'password' => ['Email and password combination is incorrect']
            ]
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
                'message' => 'You have successfully signed out'
            ]);
        } else {
            return response()->json([
                'message' => 'Something went wrong while trying to log out'
            ], 500);
        }
    }

    public function account()
    {
        $user = Auth::user()->load('character.class');

        if (!$user) {
            return response()->json([
                'message' => 'User does not exist for some reason'
            ], 404);
        }

        return response()->json($user);
    }
}
