<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::get('path', 'controller file');
Route::get('user', [UsersController::class, 'show']);
//Route::get('student', [UsersController::class, 'getData']);
Route::post('addstudent', [UsersController::class, 'addData']);
Route::delete('deletestudent/{id}', [UsersController::class, 'deleteData']);
//Route::get('getOneStudent/{id}', [UsersController::class, 'getOneData']);
Route::patch('updateStudent/{id}', [UsersController::class, 'updateData']);
