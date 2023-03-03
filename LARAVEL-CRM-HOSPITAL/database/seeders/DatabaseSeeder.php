<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    //Recuperando los seed y enviandolo a la BD
    public function run(): void
    {
        $this->call(UserTypeInformationSeeder::class);
        $this->call(StatusTypeInformationSeeder::class);
    }
}
