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
        Schema::create('appointment_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_doctor_id')
                ->constrained('users', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_speciality_id')
                ->constrained('medical_speciality_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_patient_id')
                ->constrained('users', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_hospital_id')
                ->constrained('hospital_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->string('appointment_date');
            $table->string('appointment_hour');
            $table->string('appointment_description');
            $table->string('appointment_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointment_information');
    }
};
