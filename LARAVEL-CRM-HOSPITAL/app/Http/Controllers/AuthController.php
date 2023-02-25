<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegistroRequest;

class AuthController extends Controller

//HACER CASO OMISO DE EL CODIGO COMENTADO, ES LO QUE NO ME FUNCIONO DE LO AUTENTICADO
{
    // public function register(RegistroRequest $request)
    // {
    //     $data = $request->validate();

    //     $user = User::create([
    //         'type_id' => $data['type_id'],
    //         'user_id' => $data['user_id'],
    //         'name'  => $data['name'],
    //         'last_name'  => $data['last_name'],
    //         'speciality_id'  => $data['speciality_id'],
    //         'hospital_id'  => $data['hospital_id'],
    //         'user'  => $data['user'],
    //         'email'  => $data['email'],
    //         'password'  => bcrypt($data['password'])
    //     ]);

    //     return [
    //         'token' => $user->createToken('token')->plainTextToken,
    //         'user' => $user
    //     ];
    // }

    // public function login(Request $request)
    // {
    //     $data = $request->validate();
    // }

    // public function logout(Request $request)
    // {
    // }
}
