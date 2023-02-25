<?php

namespace App\Http\Controllers;

use App\Models\AppointmentInformation;
use Illuminate\Http\Request;

class AppointmentInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appoiments = AppointmentInformation::all();
        return $appoiments;
    }

    /**
     * Store a newly created resource in storage.
     */
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

    /**
     * Display the specified resource.
     */
    public function show(AppointmentInformation $appointmentInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        AppointmentInformation::destroy($id);
        return "Delete Successfully";
    }
}
