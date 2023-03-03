<?php

namespace App\Http\Controllers;

use App\Models\AppointmentInformation;
use Illuminate\Http\Request;

class AppointmentInformationController extends Controller
{
    //Recuperando informacion
    public function index()
    {
        $appoiments = AppointmentInformation::with(['doctor', 'speciality', 'hospital', 'patient', 'status'])->get();
        return response()->json($appoiments);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request, $id)
    {
        $appoiments = AppointmentInformation::with(['doctor', 'speciality', 'hospital', 'patient', 'status'])->find($id);
        return response()->json($appoiments);
    }

    //Recuperando la informacion de citas que correspondan a un id especifico
    public function indexByPatientId($appointment_patient_id)
    {
        $appointments = AppointmentInformation::with(['doctor', 'speciality', 'hospital', 'patient', 'status'])
            ->where('appointment_patient_id', $appointment_patient_id)
            ->get();
        return response()->json($appointments);
    }

    //Recuperando el primer resultado que corresponda a un id especifico
    public function showAppointment(Request $request, $appointment_patient_id)
    {
        $appoiments = AppointmentInformation::with(['doctor', 'speciality', 'hospital', 'patient', 'status'])->find($appointment_patient_id);
        return response()->json($appoiments);
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
        return response()->json($appoiments);
    }

    //Actualizando los recursos
    public function update(Request $request, $id)
    {
        $appoiments = AppointmentInformation::findOrFail($request->id);
        $appoiments->appointment_doctor_id = $request->appointment_doctor_id;
        $appoiments->appointment_speciality_id = $request->appointment_speciality_id;
        $appoiments->appointment_patient_id = $request->appointment_patient_id;
        $appoiments->appointment_hospital_id = $request->appointment_hospital_id;
        $appoiments->appointment_date = $request->appointment_date;
        $appoiments->appointment_hour = $request->appointment_hour;
        $appoiments->appointment_description = $request->appointment_description;
        $appoiments->appointment_status = $request->appointment_status;

        $appoiments->save();
        return response()->json($appoiments);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        AppointmentInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
