<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalSpeciality extends Model
{
    use HasFactory;

    protected $fillable = [
        'hospital_speciality_id',
        'speciality_speciality_id',
        'hospital_id',
        'speciality_id',
    ];

    protected $primaryKey = null;

    public $incrementing = false;

    public function hospitalInformation()
    {
        return $this->belongsTo(HospitalInformation::class, 'hospital_id');
    }

    public function medicalSpecialityInformation()
    {
        return $this->belongsTo(MedicalSpecialityInformation::class, 'speciality_id');
    }
}
