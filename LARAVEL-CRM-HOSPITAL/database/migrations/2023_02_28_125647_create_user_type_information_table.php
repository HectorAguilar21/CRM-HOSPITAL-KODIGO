<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_type_information', function (Blueprint $table) {
            $table->id();
            $table->string('user_type_id');
            $table->string('user_type_name');
            $table->integer('user_active_members');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_type_information');
    }
};
