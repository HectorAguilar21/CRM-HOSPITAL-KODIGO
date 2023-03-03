<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PatientInformation extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'type_id',
        'user_id',
        'name',
        'last_name',
        'hospital_id',
        'number_phone',
        'emergency_number_phone',
        'date_of_birth',
        'gender',
        'address',
        'city',
        'department',
        'country',
        'user',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //Se recupera la informacion relacionada por llave foranea
    public function hospital()
    {
        return $this->belongsTo(HospitalInformation::class);
    }
}
