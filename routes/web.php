<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\Models\Campaigns;

Route::get('/', function () {
//    //GVD calc;
//    $exp = 6;
//    $army = 7;
//    $army_grow = 1.3;
//    $total_exp = 0;
//
//    $results = [0];
//
//    while($army < 150) {
//        $total_exp += round($army*$exp/5);
//
//        $results[] = [
//            'army' => $army,
//            'exp' => round($army*$exp/5)
//        ];
//
//        $army = round($army * $army_grow);
//    }
//
//    dd($results);

//    $bulks = \DB::table('users')->where('id', '127')->pluck('id');
//    $campaigns = Campaigns::where('id', 6)->first();
//    dd($campaigns->toArray());

    return view('frontend.index');
});
