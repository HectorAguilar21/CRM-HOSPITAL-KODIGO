<?php

namespace App\Http\Controllers;

use App\Models\CommentAppointmentInformation;
use Illuminate\Http\Request;

class CommentAppointmentInformationController extends Controller
{
    //Recuperando informacion 
    public function index()
    {
        $comment = CommentAppointmentInformation::with(['doctor'])->get();
        return $comment;
    }

    //Recuperando un recurso en especifico
    public function show(Request $request, $id)
    {
        $doctor = CommentAppointmentInformation::with(['doctor'])->find($id);
        return response()->json($doctor);
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

    //Actualizando un recurso en especifico
    public function update(Request $request, CommentAppointmentInformation $commentAppointmentInformation)
    {
        $comment = CommentAppointmentInformation::findOrFail($request->id);
        $comment->comment_appointment_id = $request->comment_appointment_id;
        $comment->comment_doctor_id = $request->comment_doctor_id;
        $comment->comment_appointment = $request->comment_appointment;

        $comment->save();
        return $comment;
    }

    //No hay metodo para eliminar porque el registro de todos los comentarios de los doctores siempre tienen que estar vigentes.
}
