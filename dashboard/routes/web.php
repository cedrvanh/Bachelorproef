<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();
Route::get('/logout', 'Auth\LoginController@logout');

Route::resources([
    'routes' => 'RouteController',
    'tasks' => 'TaskController',
    'task-types' => 'TaskTypeController',
    'characters' => 'CharacterController',
    'character-classes' => 'CharacterClassController',
    'items' => 'ItemController',
    'locations' => 'LocationController',
    'cities' => 'CityController',
    'users' => 'UserController',
    'roles' => 'RoleController'
]);

// Route::get('/characterclass', 'CharacterClassController@index');
