<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTypeInformationSeeder extends Seeder
{
    //Informacion definida por defecto a la BD
    //Cargando la base de datos de los tipos de usuarios a la tabla user_type_information
    public function run(): void
    {
        DB::table('user_type_information')->insert([
            'user_type_id' => 'ADM',
            'user_type_name' => 'Administrator',
            'user_active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'user_type_id' => 'DOC',
            'user_type_name' => 'Doctor',
            'user_active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'user_type_id' => 'PAT',
            'user_type_name' => 'Patient',
            'user_active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'user_type_id' => 'SEC',
            'user_type_name' => 'Secretary',
            'user_active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
