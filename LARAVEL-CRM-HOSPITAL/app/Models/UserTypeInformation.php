<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTypeInformation extends Model
{
    use HasFactory;

    //Cambiando la primary key por defecto asia 'type_id'
    protected $primaryKey = 'user_type_id';
    public $incrementing = false;
    protected $keyType = 'string';

    //Configurando los datos a modificar en la tabla
    protected $fillable = [
        'user_type_id',
        'user_type_name',
        'user_active_members',
    ];
}
