<?php

namespace App\Http\Controllers;

use App\Models\CommentAppointmentInformation;
use Illuminate\Http\Request;

class CommentAppointmentInformationController extends Controller
{
    //Recuperando informacion de CommentAppointmentInformation
    public function index()
    {
        // $comment = CommentAppointmentInformation::all();
        $comment = CommentAppointmentInformation::with(['doctor'])->get();
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


    public function show(Request $request, $id)
    {
        $doctor = CommentAppointmentInformation::with(['doctor'])->find($id);
        return response()->json($doctor);
        // $doctor = CommentAppointmentInformation::findOrFail($request->id);

        // return response()->json($doctor);
    }

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
