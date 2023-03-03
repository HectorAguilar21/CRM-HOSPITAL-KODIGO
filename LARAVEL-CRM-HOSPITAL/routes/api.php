<?php

use App\Http\Controllers\AdministratorInformationController;
use App\Http\Controllers\AppointmentInformationController;
use App\Http\Controllers\CommentAppointmentInformationController;
use App\Http\Controllers\DoctorInformationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HospitalInformationController;
use App\Http\Controllers\HospitalSpecialitiesController;
use App\Http\Controllers\MedicalSpecialityInformationController;
use App\Http\Controllers\HospitalSpecialityController;
use App\Http\Controllers\PatientInformationController;
use App\Http\Controllers\SecretaryInformationController;
use App\Http\Controllers\StatusTypeInformationController;
use App\Http\Controllers\UserTypeInformationController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Rutas para Hospital Information
Route::get('/hospital_information', [HospitalInformationController::class, 'index']);
Route::get('/hospital_information/{id}', [HospitalInformationController::class, 'show']);
Route::post('/hospital_information', [HospitalInformationController::class, 'store']);
Route::put('/hospital_information/{id}', [HospitalInformationController::class, 'update']);
Route::delete('/hospital_information/{id}', [HospitalInformationController::class, 'destroy']);

//Rutas para Medical Especiality information
Route::get('/medical_speciality_information', [MedicalSpecialityInformationController::class, 'index']);
Route::get('/medical_speciality_information/{id}', [MedicalSpecialityInformationController::class, 'show']);
Route::post('/medical_speciality_information', [MedicalSpecialityInformationController::class, 'store']);
Route::put('/medical_speciality_information/{id}', [MedicalSpecialityInformationController::class, 'update']);
Route::delete('/medical_speciality_information/{id}', [MedicalSpecialityInformationController::class, 'destroy']);

//Rutas para Hospital-Specialties
Route::get('/hospital_specialities', [HospitalSpecialitiesController::class, 'index']);
Route::post('/hospital_specialities', [HospitalSpecialitiesController::class, 'store']);

//Ruta para User Type
Route::get('/user_type_information', [UserTypeInformationController::class, 'index']);

//Ruta para Administrator Information
Route::get('/administrator_information', [AdministratorInformationController::class, 'index']);
Route::get('/administrator_information/{id}', [AdministratorInformationController::class, 'show']);
Route::post('/administrator_information', [AdministratorInformationController::class, 'store']);
Route::put('/administrator_information/{id}', [AdministratorInformationController::class, 'update']);
Route::delete('/administrator_information/{id}', [AdministratorInformationController::class, 'destroy']);

//Rutas para Doctor Information
Route::get('/doctor_information', [DoctorInformationController::class, 'index']);
Route::get('/doctor_information/{id}', [DoctorInformationController::class, 'show']);
Route::post('/doctor_information', [DoctorInformationController::class, 'store']);
Route::put('/doctor_information/{id}', [DoctorInformationController::class, 'update']);
Route::delete('/doctor_information/{id}', [DoctorInformationController::class, 'destroy']);

//Rutas para Patient Information
Route::get('/patient_information', [PatientInformationController::class, 'index']);
Route::get('/patient_information/{id}', [PatientInformationController::class, 'show']);
Route::get('/patients/user/{user_id}', [PatientInformationController::class, 'showPatient']);
Route::post('/patient_information', [PatientInformationController::class, 'store']);
Route::put('/patient_information/{id}', [PatientInformationController::class, 'update']);
Route::delete('/patient_information/{id}', [PatientInformationController::class, 'destroy']);

//Rutas para Secretary Information
Route::get('/secretary_information', [SecretaryInformationController::class, 'index']);
Route::get('/secretary_information/{id}', [SecretaryInformationController::class, 'show']);
Route::post('/secretary_information', [SecretaryInformationController::class, 'store']);
Route::put('/secretary_information/{id}', [SecretaryInformationController::class, 'update']);
Route::delete('/secretary_information/{id}', [SecretaryInformationController::class, 'destroy']);

//Ruta para Status Type
Route::get('/status_type_information', [StatusTypeInformationController::class, 'index']);

//Ruta para Appointment Information
Route::get('/appointment_information', [AppointmentInformationController::class, 'index']);
Route::get('/appointment_information/patient/{appointment_patient_id}', [AppointmentInformationController::class, 'indexByPatientId']);
Route::get('/appointment_information/{id}', [AppointmentInformationController::class, 'show']);
Route::get('/appointment_information/user/{id}', [AppointmentInformationController::class, 'showAppointment']);
Route::post('/appointment_information', [AppointmentInformationController::class, 'store']);
Route::put('/appointment_information/{id}', [AppointmentInformationController::class, 'update']);
Route::delete('/appointment_information/{id}', [AppointmentInformationController::class, 'destroy']);

//Ruta para Comment Appointment Information
Route::get('/comment_appointment_information', [CommentAppointmentInformationController::class, 'index']);
Route::get('/comment_appointment_information/{id}', [CommentAppointmentInformationController::class, 'show']);
Route::post('/comment_appointment_information', [CommentAppointmentInformationController::class, 'store']);
Route::put('/comment_appointment_information/{id}', [CommentAppointmentInformationController::class, 'update']);
