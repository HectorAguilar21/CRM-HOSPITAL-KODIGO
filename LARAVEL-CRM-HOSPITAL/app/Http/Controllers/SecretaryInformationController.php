<?php

namespace App\Http\Controllers;

use App\Models\SecretaryInformation;
use Illuminate\Http\Request;

class SecretaryInformationController extends Controller
{
    //Recuperando informacion de SecretaryInformation
    public function index()
    {
        $secretary = SecretaryInformation::all();
        return response()->json($secretary);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $secretary = new SecretaryInformation;
        $secretary->type_id = $request->type_id;
        $secretary->user_id = $request->user_id;
        $secretary->name = $request->name;
        $secretary->last_name = $request->last_name;
        $secretary->hospital_id = $request->hospital_id;
        $secretary->user = $request->user;
        $secretary->email = $request->email;
        $secretary->password = $request->password;

        $secretary->save();
        return response()->json($secretary, 201);
    }


    // public function show(SecretaryInformation $secretaryInformation)
    // {
    //     //
    // }

    public function update(
        Request $request,
        $id
    ) {
        $secretary = SecretaryInformation::findOrFail($request->id);
        $secretary->type_id = $request->type_id;
        $secretary->user_id = $request->user_id;
        $secretary->name = $request->name;
        $secretary->last_name = $request->last_name;
        $secretary->hospital_id = $request->hospital_id;
        $secretary->user = $request->user;
        $secretary->email = $request->email;
        $secretary->password = $request->password;

        $secretary->save();
        return response()->json($secretary, 201);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        SecretaryInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
