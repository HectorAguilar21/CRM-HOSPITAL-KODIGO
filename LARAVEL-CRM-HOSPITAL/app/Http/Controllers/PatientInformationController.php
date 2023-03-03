<?php

namespace App\Http\Controllers;

use App\Models\PatientInformation;
use Illuminate\Http\Request;

class PatientInformationController extends Controller
{
    //Recuperando informacion
    public function index(Request $request)
    {
        $patient = PatientInformation::with(['hospital'])->get();
        return response()->json($patient);
    }

    //Recuperando la informacion de un id especifico atraves de la columna user_id
    public function showPatient(Request $request, $user_id)
    {
        $patient = PatientInformation::with(['hospital'])
            ->where('user_id', $user_id)
            ->firstOrFail();
        return response()->json($patient);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request, $id)
    {
        $patient = PatientInformation::with(['hospital'])->find($id);
        return response()->json($patient);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $patient = new PatientInformation;
        $patient->type_id = $request->type_id;
        $patient->user_id = $request->user_id;
        $patient->name = $request->name;
        $patient->last_name = $request->last_name;
        $patient->hospital_id = $request->hospital_id;
        $patient->number_phone = $request->number_phone;
        $patient->emergency_number_phone = $request->emergency_number_phone;
        $patient->date_of_birth = $request->date_of_birth;
        $patient->gender = $request->gender;
        $patient->address = $request->address;
        $patient->city = $request->city;
        $patient->department = $request->department;
        $patient->country = $request->country;
        $patient->user = $request->user;
        $patient->email = $request->email;
        $patient->password = $request->password;

        $patient->save();
        return response()->json($patient, 201);
    }

    //actualizando los recursos de la tabla
    public function update(
        Request $request,
        string $id
    ) {
        $patient = PatientInformation::findOrFail($request->id);
        $patient->type_id = $request->type_id;
        $patient->user_id = $request->user_id;
        $patient->name = $request->name;
        $patient->last_name = $request->last_name;
        $patient->hospital_id = $request->hospital_id;
        $patient->number_phone = $request->number_phone;
        $patient->emergency_number_phone = $request->emergency_number_phone;
        $patient->date_of_birth = $request->date_of_birth;
        $patient->gender = $request->gender;
        $patient->address = $request->address;
        $patient->city = $request->city;
        $patient->department = $request->department;
        $patient->country = $request->country;
        $patient->user = $request->user;
        $patient->email = $request->email;
        $patient->password = $request->password;

        $patient->save();
        return response()->json($patient, 201);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        PatientInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
