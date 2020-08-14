<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->morphs('taskable'); // Define polymorphic relation in table
            $table->string('name', 70);
            $table->longText('description')->nullable();
            $table->integer('reward')->default(5);
            $table->integer('score')->default(10);
            $table->string('image', 512)->nullable();
            $table->foreignId('location_id')->nullable()->constrained('locations');
            $table->foreignId('route_id')->nullable()->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
