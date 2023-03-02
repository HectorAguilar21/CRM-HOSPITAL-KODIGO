<?php

namespace App\Http\Controllers;

use App\Models\StatusTypeInformation;
use Illuminate\Http\Request;

class StatusTypeInformationController extends Controller
{
    //Recuperando informacion de StatusTypeInformation

    public function index()
    {
        $user_type = StatusTypeInformation::all();
        return response()->json($user_type);
    }
}
