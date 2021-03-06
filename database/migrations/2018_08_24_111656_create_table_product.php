<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_ro');
            $table->string('description_ro')->nullable();
            $table->string('path_ro');

            $table->string('name_ru')->nullable();
            $table->string('description_ru')->nullable();
            $table->string('path_ru')->nullable();

            $table->date('until')->nullable();;
            $table->unsignedTinyInteger('category_id');
            $table->unsignedSmallInteger('store_id');

            $table->integer('views')->default(0);

            $table->timestamps();

            $table->index('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->index('store_id');
            $table->foreign('store_id')->references('id')->on('stores')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
