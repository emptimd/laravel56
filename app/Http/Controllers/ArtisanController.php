<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArtisanController extends Controller
{
    public function index()
    {
//        \Artisan::call('storage:link');
        \Artisan::call('migrate');
//        \Artisan::call('clear-compiled');
//        \Artisan::call('package:discover');


    }
}
