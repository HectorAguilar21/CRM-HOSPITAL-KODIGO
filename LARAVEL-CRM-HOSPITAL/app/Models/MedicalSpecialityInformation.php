<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialityInformation extends Model
{
    use HasFactory;

    // //Cambiando la primary key por defecto asia 'speciality_id'
    // protected $primaryKey = 'speciality_id';
    // public $incrementing = false;
    // protected $keyType = 'string';

    //Configurando los datos a modificar en la tabla
    protected $fillable = [
        'speciality_id',
        'speciality_name',
    ];

    public function hospitals()
    {
        return $this->belongsToMany(HospitalInformation::class, 'hospital_speciality', 'speciality_id', 'hospital_id');
    }
}
