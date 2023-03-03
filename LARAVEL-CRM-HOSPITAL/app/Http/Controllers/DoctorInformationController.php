<?php

namespace App\Http\Controllers;

use App\Models\DoctorInformation;
use Illuminate\Http\Request;

class DoctorInformationController extends Controller
{
    //Recuperando informacion
    public function index()
    {
        $doctor = DoctorInformation::with(['hospital', 'speciality'])->get();
        return response()->json($doctor);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request, $id)
    {
        $doctor = DoctorInformation::with(['hospital', 'speciality'])->find($id);
        return response()->json($doctor);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $doctor = new DoctorInformation;
        $doctor->type_id = $request->type_id;
        $doctor->user_id = $request->user_id;
        $doctor->name = $request->name;
        $doctor->last_name = $request->last_name;
        $doctor->speciality_id = $request->speciality_id;
        $doctor->hospital_id = $request->hospital_id;
        $doctor->user = $request->user;
        $doctor->email = $request->email;
        $doctor->password = $request->password;

        $doctor->save();
        return response()->json($doctor, 201);
    }

    //Actualizando los recursos en la tabla
    public function update(
        Request $request,
        string $id
    ) {
        $doctor = DoctorInformation::findOrFail($request->id);
        $doctor->type_id = $request->type_id;
        $doctor->user_id = $request->user_id;
        $doctor->name = $request->name;
        $doctor->last_name = $request->last_name;
        $doctor->speciality_id = $request->speciality_id;
        $doctor->hospital_id = $request->hospital_id;
        $doctor->user = $request->user;
        $doctor->email = $request->email;
        $doctor->password = $request->password;

        $doctor->save();
        return response()->json($doctor, 201);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        DoctorInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
