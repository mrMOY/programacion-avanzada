<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ReservationController;


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

Route::get('/', function () {
    return view('welcome');
});

Route::get('home', function () {
    return view('home');
});
Route::get('/login', function(){
    return view('auth.login');
})->name('login');

Route::get('/hola', function () {
    echo "hola";
});

Route::get('saludo', function(){
    echo "hola ";
});

Route::get('saludo/{name}', function($name){
    echo "hola ";
});

Route::get('suma/{num1}/{num2}', function($num1,$num2){
    echo $num1 + $num2;
})->where(['num1'=>'[0-9]+'],['num2'=>'[0-9]+']);

Route::get('users/', [UserController::class,'index']);

Route::get('users/create', [UserController::class,'create']);

Route::get('users/{id}', [UserController::class,'show']);

Route::post('users/', [UserController::class,'store']);

Route::get('/prueba', function () {
    return "hola";
})->middleware('auth');


Route::get('clients', [ClientController::class,'index']);

Route::get('clients/create', [ClientController::class,'create']);

Route::get('clients/{id}', [ClientController::class,'show']);

Route::post('clients', [ClientController::class,'store']);

Route::get('clients/edit/{id}', [ClientController::class,'edit']);

Route::put('clients', [ClientController::class,'update']);


Route::get('reservation', [ReservationController::class,'index']);

Route::get('reservation/{id}', [ReservationController::class,'show']);