<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appointment_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_doctor_id')
                ->constrained('doctor_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_speciality_id')
                ->constrained('medical_speciality_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_patient_id')
                ->constrained('patient_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('appointment_hospital_id')
                ->constrained('hospital_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->string('appointment_date');
            $table->string('appointment_hour');
            $table->string('appointment_description');
            $table->foreignId('appointment_status')
                ->constrained('status_type_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appointment_information');
    }
};
