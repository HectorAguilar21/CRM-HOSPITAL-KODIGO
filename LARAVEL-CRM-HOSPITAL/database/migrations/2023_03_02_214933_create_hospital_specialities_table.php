<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hospital_specialities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hospital_information_id')
                ->constrained('hospital_information', 'id')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreignId('medical_speciality_information_id')
                ->constrained('medical_speciality_information', 'id')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hospital_specialities');
    }
};
