<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StudentController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResource('students',StudentController::class);

Route::group(['namespace'=>'App\Http\Controllers\Api'],function(){
Route::get('students','StudentController@index');
Route::get('students/{student}/show','StudentController@show');
Route::post('students/store','StudentController@store');
Route::put('students/{student}/update','StudentController@update');
Route::post('students/{student}/destroy','StudentController@destroy');
});