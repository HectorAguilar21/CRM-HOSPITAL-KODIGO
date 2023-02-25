<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'appointment_doctor_id',
        'appointment_speciality_id',
        'appointment_patient_id',
        'appointment_hospital_id',
        'appointment_date',
        'appointment_hour',
        'appointment_description',
        'appointment_status'
    ];
}
