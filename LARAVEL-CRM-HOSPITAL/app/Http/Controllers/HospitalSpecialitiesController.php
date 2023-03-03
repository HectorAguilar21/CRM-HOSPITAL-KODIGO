<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HospitalInformation;
use App\Models\HospitalSpecialities;
use App\Models\MedicalSpecialityInformation;

class HospitalSpecialitiesController extends Controller
{

    //Recuperando la informacion
    public function index()
    {
        $hospital = HospitalSpecialities::with(['hospital', 'speciality'])->get();
        return response()->json($hospital);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $hospital_speciality = new HospitalSpecialities;
        $hospital_speciality->hospital_information_id = $request->hospital_information_id;
        $hospital_speciality->medical_speciality_information_id = $request->medical_speciality_information_id;
        $hospital_speciality->save();
        return response()->json($hospital_speciality, 201);
    }

    //Se eliminan los demas metodos porque solo es una tabla pivote
}
