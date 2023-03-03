<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HospitalInformation;
use App\Models\HospitalSpecialities;
use App\Models\MedicalSpecialityInformation;

class HospitalSpecialitiesController extends Controller
{

    public function index()
    {
        $hospital = HospitalSpecialities::with(['hospital', 'speciality'])->get();
        return response()->json($hospital);
    }

    public function store(Request $request)
    {
        $hospital_speciality = new HospitalSpecialities;
        $hospital_speciality->hospital_information_id = $request->hospital_information_id;
        $hospital_speciality->medical_speciality_information_id = $request->medical_speciality_information_id;
        $hospital_speciality->save();
        return response()->json($hospital_speciality, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HospitalSpecialities $hospitalSpecialities)
    {
        //
    }
}
