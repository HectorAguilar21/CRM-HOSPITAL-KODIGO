<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialityInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'speciality_id',
        'speciality_name',
    ];

    //Se recupera la informacion relacionada por llave foranea
    public function hospitals()
    {
        return $this->belongsToMany(HospitalInformation::class, 'hospital_specialities', 'medical_speciality_information_id', 'hospital_information_id');
    }
}
