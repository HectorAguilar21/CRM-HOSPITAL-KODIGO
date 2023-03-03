<?php

namespace App\Http\Controllers;

use App\Models\SecretaryInformation;
use Illuminate\Http\Request;

class SecretaryInformationController extends Controller
{
    //Recuperando informacion 
    public function index()
    {
        $secretary = SecretaryInformation::with(['hospital'])->get();
        return response()->json($secretary);
    }

    //Recuperando un recurso en especifico
    public function show(Request $request, $id)
    {
        $secretary = SecretaryInformation::with(['hospital'])->find($id);
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

    //Actualizando los recursos en la tabla
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
