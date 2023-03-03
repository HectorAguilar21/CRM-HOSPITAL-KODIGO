<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('status_type_information', function (Blueprint $table) {
            $table->id();
            $table->string('status_type_id');
            $table->string('status_type_name');
            $table->integer('status_active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('status_type_information');
    }
};
