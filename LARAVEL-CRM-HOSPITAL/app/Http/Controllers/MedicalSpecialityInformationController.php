<?php

namespace App\Http\Controllers;

use App\Models\MedicalSpecialityInformation;
use Illuminate\Http\Request;

class MedicalSpecialityInformationController extends Controller
{
    //Recuperando informacion
    public function index()
    {
        $specialities = MedicalSpecialityInformation::all();
        return response()->json($specialities);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request)
    {
        $specialities = MedicalSpecialityInformation::findOrFail($request->id);
        return response()->json($specialities);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $specialities = new MedicalSpecialityInformation;
        $specialities->speciality_id = $request->speciality_id;
        $specialities->speciality_name = $request->speciality_name;

        $specialities->save();
        return response()->json($specialities, 201);
    }

    //Actualizando los recursos de la tabla
    public function update(Request $request, string $id)
    {
        $specialities = MedicalSpecialityInformation::findOrFail($request->id);
        $specialities->speciality_id = $request->speciality_id;
        $specialities->speciality_name = $request->speciality_name;

        $specialities->save();
        return response()->json($specialities, 200);
    }

    //Eliminando los recursos de la tabla
    public function destroy(string $id)
    {
        MedicalSpecialityInformation::destroy($id);
        return response()->json(['message' => 'Medical speciality deleted'], 200);
    }
}
