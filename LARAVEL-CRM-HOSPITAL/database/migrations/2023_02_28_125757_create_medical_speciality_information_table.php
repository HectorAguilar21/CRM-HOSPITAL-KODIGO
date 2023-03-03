<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('medical_speciality_information', function (Blueprint $table) {
            $table->id();
            $table->string('speciality_id');
            $table->string('speciality_name');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medical_speciality_information');
    }
};
