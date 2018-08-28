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


Auth::routes();

Route::get('/admin', 'HomeController@index');

//->middleware('auth');
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function(){

    Route::get('categories', ['as'=> 'admin.categories.index', 'uses' => 'CategoryController@index']);
    Route::post('categories', ['as'=> 'admin.categories.store', 'uses' => 'CategoryController@store']);
    Route::get('categories/create', ['as'=> 'admin.categories.create', 'uses' => 'CategoryController@create']);
    Route::put('categories/{categories}', ['as'=> 'admin.categories.update', 'uses' => 'CategoryController@update']);
    Route::patch('categories/{categories}', ['as'=> 'admin.categories.update', 'uses' => 'CategoryController@update']);
    Route::delete('categories/{categories}', ['as'=> 'admin.categories.destroy', 'uses' => 'CategoryController@destroy']);
    Route::get('categories/{categories}', ['as'=> 'admin.categories.show', 'uses' => 'CategoryController@show']);
    Route::get('categories/{categories}/edit', ['as'=> 'admin.categories.edit', 'uses' => 'CategoryController@edit']);


    Route::get('products', ['as'=> 'admin.products.index', 'uses' => 'ProductController@index']);
    Route::post('products', ['as'=> 'admin.products.store', 'uses' => 'ProductController@store']);
    Route::get('products/create', ['as'=> 'admin.products.create', 'uses' => 'ProductController@create']);
    Route::put('products/{products}', ['as'=> 'admin.products.update', 'uses' => 'ProductController@update']);
    Route::patch('products/{products}', ['as'=> 'admin.products.update', 'uses' => 'ProductController@update']);
    Route::delete('products/{products}', ['as'=> 'admin.products.destroy', 'uses' => 'ProductController@destroy']);
    Route::get('products/{products}', ['as'=> 'admin.products.show', 'uses' => 'ProductController@show']);
    Route::get('products/{products}/edit', ['as'=> 'admin.products.edit', 'uses' => 'ProductController@edit']);

    Route::post('products/remove_photos', ['as'=> 'admin.products.removePhotos', 'uses' => 'ProductController@removePhotos']);

//    Route::get('artisan', ['as'=> 'admin.products.index', 'uses' => 'ArtisanController@index']);
});

Route::get('artisan', ['as'=> 'admin.products.index', 'uses' => 'ArtisanController@index']);



//Route::get('admin/productPhotos', ['as'=> 'admin.productPhotos.index', 'uses' => 'ProductPhotoController@index']);
//Route::post('admin/productPhotos', ['as'=> 'admin.productPhotos.store', 'uses' => 'ProductPhotoController@store']);
//Route::get('admin/productPhotos/create', ['as'=> 'admin.productPhotos.create', 'uses' => 'ProductPhotoController@create']);
//Route::put('admin/productPhotos/{productPhotos}', ['as'=> 'admin.productPhotos.update', 'uses' => 'ProductPhotoController@update']);
//Route::patch('admin/productPhotos/{productPhotos}', ['as'=> 'admin.productPhotos.update', 'uses' => 'ProductPhotoController@update']);
//Route::delete('admin/productPhotos/{productPhotos}', ['as'=> 'admin.productPhotos.destroy', 'uses' => 'ProductPhotoController@destroy']);
//Route::get('admin/productPhotos/{productPhotos}', ['as'=> 'admin.productPhotos.show', 'uses' => 'ProductPhotoController@show']);
//Route::get('admin/productPhotos/{productPhotos}/edit', ['as'=> 'admin.productPhotos.edit', 'uses' => 'ProductPhotoController@edit']);


Route::get('admin/stores', ['as'=> 'admin.stores.index', 'uses' => 'StoreController@index']);
Route::post('admin/stores', ['as'=> 'admin.stores.store', 'uses' => 'StoreController@store']);
Route::get('admin/stores/create', ['as'=> 'admin.stores.create', 'uses' => 'StoreController@create']);
Route::put('admin/stores/{stores}', ['as'=> 'admin.stores.update', 'uses' => 'StoreController@update']);
Route::patch('admin/stores/{stores}', ['as'=> 'admin.stores.update', 'uses' => 'StoreController@update']);
Route::delete('admin/stores/{stores}', ['as'=> 'admin.stores.destroy', 'uses' => 'StoreController@destroy']);
Route::get('admin/stores/{stores}', ['as'=> 'admin.stores.show', 'uses' => 'StoreController@show']);
Route::get('admin/stores/{stores}/edit', ['as'=> 'admin.stores.edit', 'uses' => 'StoreController@edit']);


Route::get('admin/storeCategories', ['as'=> 'admin.storeCategories.index', 'uses' => 'StoreCategoryController@index']);
Route::post('admin/storeCategories', ['as'=> 'admin.storeCategories.store', 'uses' => 'StoreCategoryController@store']);
Route::get('admin/storeCategories/create', ['as'=> 'admin.storeCategories.create', 'uses' => 'StoreCategoryController@create']);
Route::put('admin/storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.update', 'uses' => 'StoreCategoryController@update']);
Route::patch('admin/storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.update', 'uses' => 'StoreCategoryController@update']);
Route::delete('admin/storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.destroy', 'uses' => 'StoreCategoryController@destroy']);
Route::get('admin/storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.show', 'uses' => 'StoreCategoryController@show']);
Route::get('admin/storeCategories/{storeCategories}/edit', ['as'=> 'admin.storeCategories.edit', 'uses' => 'StoreCategoryController@edit']);
