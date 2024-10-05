<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateUsers extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
         if (!static::$capsule::schema()->hasTable("users")):
            static::$capsule::schema()->create("users", function (Blueprint $table) {
                $table->increments('id');
                $table->string('username')->unique();
                $table->string('email')->unique();
                $table->string('password');
                $table->timestamps();
            });
         endif;

        // Schema::build('users');
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('users');
    }
}
