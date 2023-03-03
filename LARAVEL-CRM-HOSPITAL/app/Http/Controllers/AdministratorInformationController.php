<?php

namespace App\Http\Controllers;

use App\Models\AdministratorInformation;
use Illuminate\Http\Request;

class AdministratorInformationController extends Controller
{
    //Recuperando informacion
    public function index(Request $request)
    {
        $administrator = AdministratorInformation::with(['hospital'])->get();
        return response()->json($administrator);
    }

    //Mostrando un recurso en especifico
    public function show(Request $request, $id)
    {
        $administrator = AdministratorInformation::with(['hospital'])->find($id);
        return response()->json($administrator);
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $administrator = new AdministratorInformation;
        $administrator->type_id = $request->type_id;
        $administrator->user_id = $request->user_id;
        $administrator->name = $request->name;
        $administrator->last_name = $request->last_name;
        $administrator->hospital_id = $request->hospital_id;
        $administrator->user = $request->user;
        $administrator->email = $request->email;
        $administrator->password = $request->password;

        $administrator->save();
        return response()->json($administrator, 201);
    }

    //Actualizando los recursos de la tabla
    public function update(
        Request $request,
        string $id
    ) {
        $administrator = AdministratorInformation::findOrFail($request->id);
        $administrator->type_id = $request->type_id;
        $administrator->user_id = $request->user_id;
        $administrator->name = $request->name;
        $administrator->last_name = $request->last_name;
        $administrator->hospital_id = $request->hospital_id;
        $administrator->user = $request->user;
        $administrator->email = $request->email;
        $administrator->password = $request->password;

        $administrator->save();
        return response()->json($administrator, 201);
    }

    //Eliminando los recursos de la tabla
    public function destroy($id)
    {
        AdministratorInformation::destroy($id);
        return response()->json(['message' => 'Hospital deleted'], 200);
    }
}
