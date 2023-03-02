<?php

namespace App\Http\Controllers;

use App\Models\CommentAppointmentInformation;
use Illuminate\Http\Request;

class CommentAppointmentInformationController extends Controller
{
    //Recuperando informacion de CommentAppointmentInformation
    public function index()
    {
        $comment = CommentAppointmentInformation::all();
        return $comment;
    }

    //Creando los recursos en la tabla
    public function store(Request $request)
    {
        $comment = new CommentAppointmentInformation();
        $comment->comment_appointment_id = $request->comment_appointment_id;
        $comment->comment_doctor_id = $request->comment_doctor_id;
        $comment->comment_appointment = $request->comment_appointment;

        $comment->save();
        return $comment;
    }


    // public function show(CommentAppointmentInformation $commentAppointmentInformation)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CommentAppointmentInformation $commentAppointmentInformation)
    {
        $comment = CommentAppointmentInformation::findOrFail($request->id);
        $comment->comment_appointment_id = $request->comment_appointment_id;
        $comment->comment_doctor_id = $request->comment_doctor_id;
        $comment->comment_appointment = $request->comment_appointment;

        $comment->save();
        return $comment;
    }
}
