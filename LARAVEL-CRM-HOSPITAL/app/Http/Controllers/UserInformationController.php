<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Http\Request;

class UserInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return $user;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->type_id = $request->type_id;
        $user->user_id = $request->user_id;
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->speciality_id = $request->speciality_id;
        $user->hospital_id = $request->hospital_id;
        $user->number_phone = $request->number_phone;
        $user->date_of_birth = $request->date_of_birth;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->department = $request->department;
        $user->country = $request->country;
        $user->user = $request->user;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->email_verified_at = $request->email_verified_at;

        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->type_id = $request->type_id;
        $user->user_id = $request->user_id;
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->speciality_id = $request->speciality_id;
        $user->hospital_id = $request->hospital_id;
        $user->number_phone = $request->number_phone;
        $user->date_of_birth = $request->date_of_birth;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->department = $request->department;
        $user->country = $request->country;
        $user->user = $request->user;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->email_verified_at = $request->email_verified_at;

        $user->save();
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
