<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalSpecialities extends Model
{
    use HasFactory;

    protected $table = 'hospital_specialities';

    protected $fillable = [
        'hospital_information_id',
        'medical_speciality_information_id',
    ];

    public function hospital()
    {
        return $this->belongsTo(HospitalInformation::class, 'hospital_information_id');
    }

    public function speciality()
    {
        return $this->belongsTo(MedicalSpecialityInformation::class, 'medical_speciality_information_id');
    }
}
