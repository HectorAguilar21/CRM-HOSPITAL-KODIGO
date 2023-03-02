<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hospital_specialities', function (Blueprint $table) {
            $table->string('hospital_speciality_id');
            $table->string('speciality_speciality_id');
            $table->timestamps();

            $table->foreignId('hospital_id')
                ->constrained('hospital_information', 'id')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreignId('speciality_id')
                ->constrained('medical_speciality_information', 'id')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();

            $table->primary(['hospital_speciality_id', 'speciality_speciality_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospital_specialities');
    }
};
