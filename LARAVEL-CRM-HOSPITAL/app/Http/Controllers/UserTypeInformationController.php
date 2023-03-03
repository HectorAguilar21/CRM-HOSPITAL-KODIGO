<?php

namespace App\Http\Controllers;

use App\Models\UserTypeInformation;
use Illuminate\Http\Request;

class UserTypeInformationController extends Controller
{
    //Recuperando informacion
    public function index()
    {
        $user_type = UserTypeInformation::all();
        return response()->json($user_type);
    }

    //Se eliminan los otros metodos debido a que no son necesarios para esta tabla
}
