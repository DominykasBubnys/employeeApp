<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get("/get/employee/list", [EmployeeController::class, "getEmployeeList"])->name("employee.list");

Route::post('/get/individual/employee/details', [EmployeeController::class, "getEmployeeDetails"]);//->name("employee.details");

Route::post('/update/employee/data', [EmployeeController::class, "updateEmployeeData"]);

Route::delete('/delete/employee/data/{employee}', [EmployeeController::class, "destroy"]);