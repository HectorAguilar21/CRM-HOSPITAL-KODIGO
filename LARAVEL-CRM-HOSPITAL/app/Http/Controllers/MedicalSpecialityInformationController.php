<?php

namespace App\Http\Controllers;

use App\Models\MedicalSpecialityInformation;
use Illuminate\Http\Request;

class MedicalSpecialityInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $speciality = MedicalSpecialityInformation::all();
        return $speciality;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $speciality = new MedicalSpecialityInformation;
        $speciality->speciality_id = $request->speciality_id;
        $speciality->speciality_name = $request->speciality_name;

        $speciality->save();
        return $speciality;
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalSpecialityInformation $medicalSpecialityInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $speciality = MedicalSpecialityInformation::findOrFail($request->id);
        $speciality->speciality_id = $request->speciality_id;
        $speciality->speciality_name = $request->speciality_name;

        $speciality->save();
        return $speciality;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        MedicalSpecialityInformation::destroy($id);
        return "Delete Successfully";
    }
}
