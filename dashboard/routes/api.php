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

// REST API routes
Route::group(['prefix' => 'v1'], function() {
    // Authentication routes
    Route::prefix('auth')->group(function() {
        Route::post('signup', 'Api\AuthController@signUp');
        Route::post('signin', 'Api\AuthController@signIn');

        // Protected routes - require access token
        Route::middleware('auth:api')->group(function() {
            Route::get('/account', 'Api\AuthController@account');
            Route::post('/signout', 'Api\AuthController@signOut');
        });
    });

    Route::apiResources([
        'routes' => 'Api\RouteController',
        'tasks' => 'Api\TaskController',
        'characters' => 'Api\CharacterController',
        'classes' => 'Api\CharacterClassController',
        'locations' => 'Api\LocationController',
        'cities' => 'Api\CityController',
        'users' => 'Api\UserController',
        'items' => 'Api\ItemController',
        'characters.items' => 'Api\CharacterItemController'
    ]);

    Route::post('characters/{characterId}/items/{itemId}', 'Api\CharacterItemController@store');
});
