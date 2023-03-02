<?php

namespace App\Http\Controllers;

use App\Models\AppointmentInformation;
use Illuminate\Http\Request;

class AppointmentInformationController extends Controller
{
    //Recuperando informacion de AppointmentInformation
    public function index()
    {
        $appoiments = AppointmentInformation::all();
        return $appoiments;
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $appoiments = new AppointmentInformation;
        $appoiments->appointment_doctor_id = $request->appointment_doctor_id;
        $appoiments->appointment_speciality_id = $request->appointment_speciality_id;
        $appoiments->appointment_patient_id = $request->appointment_patient_id;
        $appoiments->appointment_hospital_id = $request->appointment_hospital_id;
        $appoiments->appointment_date = $request->appointment_date;
        $appoiments->appointment_hour = $request->appointment_hour;
        $appoiments->appointment_description = $request->appointment_description;
        $appoiments->appointment_status = $request->appointment_status;

        $appoiments->save();
        return $appoiments;
    }

    // public function show(AppointmentInformation $appointment)    // {
    //     //
    // }

    public function update(Request $request, $id)
    {
        $appoiments = AppointmentInformation::findOrFail($request->id);
        $appoiments->appointment_doctor_id = $request->appointment_doctor_id;
        $appoiments->appointment_specialty_id = $request->appointment_specialty_id;
        $appoiments->appointment_patient_id = $request->appointment_patient_id;
        $appoiments->appointment_hospital_id = $request->appointment_hospital_id;
        $appoiments->appointment_date = $request->appointment_date;
        $appoiments->appointment_hour = $request->appointment_hour;
        $appoiments->appointment_description = $request->appointment_description;
        $appoiments->appointment_status = $request->appointment_status;

        $appoiments->save();
        return $appoiments;
    }

    //Eliminando los recursos de la tabla

    public function destroy($id)
    {
        AppointmentInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
