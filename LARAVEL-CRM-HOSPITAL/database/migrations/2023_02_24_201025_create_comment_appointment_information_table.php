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
        Schema::create('comment_appointment_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comment_appointment_id')
                ->constrained('appointment_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId('comment_doctor_id')
                ->constrained('users', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->string('comment_appointment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comment_appointment_information');
    }
};
