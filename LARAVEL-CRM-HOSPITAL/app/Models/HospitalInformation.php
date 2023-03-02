<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalInformation extends Model
{
    use HasFactory;

    // //Cambiando la primary key por defecto asia 'hospital_id'
    // protected $primaryKey = 'hospital_id';
    // public $incrementing = false;
    // protected $keyType = 'string';

    //Configurando los datos a modificar en la tabla
    protected $fillable = [
        'hospital_id',
        'hospital_name',
        'hospital_address',
        'hospital_city',
        'hospital_department',
        'hospital_country'
    ];

    public function medicalSpecialities()
    {
        return $this->belongsToMany(MedicalSpecialityInformation::class, 'hospital_speciality', 'hospital_id', 'speciality_id');
    }
}
