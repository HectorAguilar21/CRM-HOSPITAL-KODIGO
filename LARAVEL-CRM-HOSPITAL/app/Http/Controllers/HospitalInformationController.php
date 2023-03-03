<?php

namespace App\Http\Controllers;

use App\Models\HospitalInformation;
use Illuminate\Http\Request;

class HospitalInformationController extends Controller
{
    //Recuperando informacion
    public function index()
    {
        $hospital = HospitalInformation::all();
        return response()->json($hospital);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request)
    {
        $hospital = HospitalInformation::findOrFail($request->id);

        return response()->json($hospital);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $hospital = new HospitalInformation;
        $hospital->hospital_id = $request->hospital_id;
        $hospital->hospital_name = $request->hospital_name;
        $hospital->hospital_address = $request->hospital_address;
        $hospital->hospital_city = $request->hospital_city;
        $hospital->hospital_department = $request->hospital_department;
        $hospital->hospital_country = $request->hospital_country;

        $hospital->save();
        return response()->json($hospital, 201);
    }

    //Actualizando los recursos de la tabla
    public function update(Request $request, string $id)
    {
        $hospital = HospitalInformation::findOrFail($request->id);
        $hospital->hospital_id = $request->hospital_id;
        $hospital->hospital_name = $request->hospital_name;
        $hospital->hospital_address = $request->hospital_address;
        $hospital->hospital_city = $request->hospital_city;
        $hospital->hospital_department = $request->hospital_department;
        $hospital->hospital_country = $request->hospital_country;

        $hospital->save();
        return response()->json($hospital, 200);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        HospitalInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
