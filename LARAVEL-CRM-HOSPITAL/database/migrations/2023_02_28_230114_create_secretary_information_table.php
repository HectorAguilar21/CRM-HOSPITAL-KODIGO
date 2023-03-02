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
        Schema::create('secretary_information', function (Blueprint $table) {
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
            $table->string('user')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('secretary_information');
    }
};
