<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StatusTypeInformationSeeder extends Seeder
{

    //Informacion definida por defecto a la BD
    //Cargando la base de datos de los tipos de estados a la tabla status_type_information
    public function run(): void
    {
        DB::table('status_type_information')->insert([
            'status_type_id' => 'ACT',
            'status_type_name' => 'Activa',
            'status_active' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('status_type_information')->insert([
            'status_type_id' => 'PEN',
            'status_type_name' => 'Pendiente',
            'status_active' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('status_type_information')->insert([
            'status_type_id' => 'REA',
            'status_type_name' => 'Realizada',
            'status_active' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('status_type_information')->insert([
            'status_type_id' => 'CAN',
            'status_type_name' => 'Cancelada',
            'status_active' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
