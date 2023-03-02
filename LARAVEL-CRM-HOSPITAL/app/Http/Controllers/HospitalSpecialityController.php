<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HospitalSpeciality;
use App\Models\HospitalInformation;
use App\Models\MedicalSpecialityInformation;

class HospitalSpecialityController extends Controller
{
    //Recuperando informacion de MedicalSpecialityInformation
    public function index()
    {
        $hospitalSpecialities = HospitalSpeciality::all();
        return response()->json($hospitalSpecialities);
    }
    //Especialidades por Hospital
    public function indexByHospital(Request $request)
    {
        // Obtener el ID del hospital de la solicitud
        $hospitalId = $request->input('hospital_id');

        // Obtener las relaciones del hospital especificado
        $hospitalSpecialities = HospitalSpeciality::where('hospital_id', $hospitalId)->get();

        // Obtener los IDs de las especialidades relacionadas con el hospital
        $specialityIds = $hospitalSpecialities->pluck('speciality_id');

        // Obtener las especialidades relacionadas con el hospital
        $specialities = MedicalSpecialityInformation::whereIn('speciality_id', $specialityIds)->get();

        // Devolver las especialidades como respuesta
        return response()->json($specialities);
    }

    //Hospitales por Especialidad
    public function indexBySpeciality(Request $request)
    {
        // Obtener el ID de la especialidad de la solicitud
        $specialityId = $request->input('speciality_id');

        // Obtener las relaciones de la especialidad especificada
        $specialityHospitals = HospitalSpeciality::where('speciality_id', $specialityId)->get();

        // Obtener los IDs de los hospitales relacionados con la especialidad
        $hospitalIds = $specialityHospitals->pluck('hospital_id');

        // Obtener los hospitales relacionados con la especialidad
        $hospitals = HospitalInformation::whereIn('hospital_id', $hospitalIds)->get();

        // Devolver los hospitales como respuesta
        return response()->json($hospitals);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $hospitalSpecialities = new HospitalSpeciality;
        $hospitalSpecialities->hospital_id = $request->hospital_id;
        $hospitalSpecialities->speciality_id = $request->speciality_id;

        $hospitalSpecialities->save();
        return response()->json($hospitalSpecialities, 201);
    }

    // public function show($hospitalId, $specialityId)
    // {
    //     $hospitalSpeciality = HospitalSpeciality::where('hospital_id', $hospitalId)
    //         ->where('speciality_id', $specialityId)
    //         ->first();

    //     if (!$hospitalSpeciality) {
    //         return response()->json(['message' => 'Hospital speciality not found'], 404);
    //     }

    //     return response()->json($hospitalSpeciality);
    // }
}
