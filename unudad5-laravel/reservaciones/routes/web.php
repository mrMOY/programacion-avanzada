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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('welcome');
});

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