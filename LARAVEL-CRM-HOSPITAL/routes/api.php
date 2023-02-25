<?php

use App\Http\Controllers\AppointmentInformationController;
// use App\Http\Controllers\AuthController;
use App\Http\Controllers\HospitalInformationController;
use App\Http\Controllers\MedicalSpecialityInformationController;
use App\Http\Controllers\UserInformationController;
use App\Http\Controllers\UserTypeInformationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user_type_information', [UserTypeInformationController::class, 'index']);

Route::get('/users', [UserInformationController::class, 'index']);
Route::post('/users', [UserInformationController::class, 'store']);
Route::put('/users', [UserInformationController::class, 'update']);
Route::delete('/users', [UserInformationController::class, 'destroy']);

Route::get('/hospital_information', [HospitalInformationController::class, 'index']);
Route::post('/hospital_information', [HospitalInformationController::class, 'store']);
Route::put('/hospital_information/${id}', [HospitalInformationController::class, 'update']);
Route::delete('/hospital_information/${id}', [HospitalInformationController::class, 'destroy']);

Route::get('/medical_speciality_information', [MedicalSpecialityInformationController::class, 'index']);
Route::post('/medical_speciality_information', [MedicalSpecialityInformationController::class, 'store']);
Route::put('/medical_speciality_information/${id}', [MedicalSpecialityInformationController::class, 'update']);
Route::delet('/medical_speciality_information/${id}', [MedicalSpecialityInformationController::class, 'destroy']);

Route::get('/appointment_information', [AppointmentInformationController::class, 'index']);
Route::post('/appointment_information', [AppointmentInformationController::class, 'store']);
Route::put('/appointment_information/${id}', [AppointmentInformationController::class, 'update']);
Route::delete('/appointment_information/${id}', [AppointmentInformationController::class, 'destroy']);

Route::get('/comment_appointment_information', [AppointmentInformationController::class, 'index']);
Route::post('/comment_appointment_information', [AppointmentInformationController::class, 'store']);
Route::put('/comment_appointment_information/${id}', [AppointmentInformationController::class, 'update']);



//HACER CASO OMISO DE EL CODIGO COMENTADO, ES LO QUE NO ME FUNCIONO DE LO AUTENTICADO

// Route::post('/registro', [AuthController::class, 'register']);
// Route::post('/doctors', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);
