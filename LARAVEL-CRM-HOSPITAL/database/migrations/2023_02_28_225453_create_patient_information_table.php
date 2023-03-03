<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patient_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_id')
                ->constrained('user_type_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->string('user_id');
            $table->string('name');
            $table->string('last_name');
            $table->foreignId('hospital_id')
                ->constrained('hospital_information', 'id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->integer('number_phone');
            $table->integer('emergency_number_phone');
            $table->string('date_of_birth');
            $table->string('gender');
            $table->string('address');
            $table->string('city');
            $table->string('department');
            $table->string('country');
            $table->string('user')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('patient_information');
    }
};
