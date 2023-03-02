<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusTypeInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'status_type_id',
        'status_type_name',
        'status_active',
    ];
}
