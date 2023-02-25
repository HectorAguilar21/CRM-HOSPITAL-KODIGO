<?php

namespace App\Http\Controllers;

use App\Models\UserTypeInformation;
use Illuminate\Http\Request;

class UserTypeInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_type = UserTypeInformation::all();
        return $user_type;
    }
}
