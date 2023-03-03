<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'hospital_id',
        'hospital_name',
        'hospital_address',
        'hospital_city',
        'hospital_department',
        'hospital_country'
    ];

    //Se recupera la informacion relacionada por llave foranea
    public function specialities()
    {
        return $this->belongsToMany(MedicalSpecialityInformation::class, 'hospital_specialities', 'hospital_information_id', 'medical_speciality_information_id');
    }
}
