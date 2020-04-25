<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('auth')->group(function() {
    Route::post('signup', 'Api\AuthController@signUp');
    Route::post('signin', 'Api\AuthController@signIn');
});


Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', 'auth.verify']], function() {
    Route::apiResources([
        'users' => 'Api\UserController',
        'characters' => 'Api\CharacterController'
    ]);
});
