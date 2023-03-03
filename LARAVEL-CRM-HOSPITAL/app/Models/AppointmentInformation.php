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

    //Se recupera la informacion relacionada por llave foranea
    public function doctor()
    {
        return $this->belongsTo(DoctorInformation::class, 'appointment_doctor_id');
    }

    //Se recupera la informacion relacionada por llave foranea
    public function speciality()
    {
        return $this->belongsTo(MedicalSpecialityInformation::class, 'appointment_speciality_id');
    }

    //Se recupera la informacion relacionada por llave foranea
    public function hospital()
    {
        return $this->belongsTo(HospitalInformation::class, 'appointment_hospital_id');
    }

    //Se recupera la informacion relacionada por llave foranea
    public function patient()
    {
        return $this->belongsTo(PatientInformation::class, 'appointment_patient_id');
    }

    //Se recupera la informacion relacionada por llave foranea
    public function status()
    {
        return $this->belongsTo(StatusTypeInformation::class, 'appointment_status');
    }
}
