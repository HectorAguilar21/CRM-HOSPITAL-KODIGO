<?php

namespace App\Http\Controllers;

use App\Models\HospitalInformation;
use Illuminate\Http\Request;

class HospitalInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hospital = HospitalInformation::all();
        return $hospital;
    }

    /**
     * Store a newly created resource in storage.
     */
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
        return $hospital;
    }

    /**
     * Display the specified resource.
     */
    public function show(HospitalInformation $hospitalInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HospitalInformation $hospitalInformation)
    {
        $hospital = HospitalInformation::findOrFail($request->id);
        $hospital->hospital_id = $request->hospital_id;
        $hospital->hospital_name = $request->hospital_name;
        $hospital->hospital_address = $request->hospital_address;
        $hospital->hospital_city = $request->hospital_city;
        $hospital->hospital_department = $request->hospital_department;
        $hospital->hospital_country = $request->hospital_country;

        $hospital->save();
        return $hospital;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        HospitalInformation::destroy($id);
        return "Delete Successfully";
    }
}
