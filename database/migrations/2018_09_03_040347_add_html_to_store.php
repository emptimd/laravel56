<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddHtmlToStore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stores', function(Blueprint $table)
        {
            $table->text('html_ro')->nullable()->after('logo');
            $table->text('html_ru')->nullable()->after('logo');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stores', function(Blueprint $table)
        {
            $table->dropColumn('html_ro');
            $table->dropColumn('html_ru');
        });
    }
}
