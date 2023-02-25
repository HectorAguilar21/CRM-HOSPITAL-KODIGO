<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTypeInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user_type_information')->insert([
            'type_id' => 'ADM',
            'type_name' => 'administrator',
            'active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'type_id' => 'DOC',
            'type_name' => 'Doctor',
            'active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'type_id' => 'PAT',
            'type_name' => 'patient',
            'active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('user_type_information')->insert([
            'type_id' => 'GEN',
            'type_name' => 'GENERAL',
            'active_members' => 0,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
