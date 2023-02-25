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
}
