<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentAppointmentInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'comment_appointment_id',
        'comment_doctor_id',
        'comment_appointment',
    ];

    //Se recupera la informacion relacionada por llave foranea
    public function doctor()
    {
        return $this->belongsTo(DoctorInformation::class, 'comment_doctor_id');
    }
}
