<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hospital_information', function (Blueprint $table) {
            $table->id();
            $table->string('hospital_id');
            $table->string('hospital_name');
            $table->string('hospital_address');
            $table->string('hospital_city');
            $table->string('hospital_department');
            $table->string('hospital_country');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hospital_information');
    }
};
