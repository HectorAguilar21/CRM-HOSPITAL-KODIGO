<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSpecialityInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'speciality_id',
        'speciality_name'
    ];
}
