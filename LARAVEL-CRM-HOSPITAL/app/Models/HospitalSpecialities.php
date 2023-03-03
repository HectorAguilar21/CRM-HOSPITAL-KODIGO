<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalSpecialities extends Model
{
    use HasFactory;

    //Haciendo proteccion al nombre de la tabla
    protected $table = 'hospital_specialities';

    protected $fillable = [
        'hospital_information_id',
        'medical_speciality_information_id',
    ];

    //Se recupera la informacion relacionada por llave foranea
    public function hospital()
    {
        return $this->belongsTo(HospitalInformation::class, 'hospital_information_id');
    }

    //Se recupera la informacion relacionada por llave foranea
    public function speciality()
    {
        return $this->belongsTo(MedicalSpecialityInformation::class, 'medical_speciality_information_id');
    }
}
