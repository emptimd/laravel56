<?php

Route::get('/', 'HomeController@index');

Route::get('contact', 'HomeController@contact');
Route::post('contact', 'HomeController@contact');

Route::get('catalog/{id}', 'CatalogController@view');
Route::get('category/{id}', 'HomeController@category');


Auth::routes();
Route::match(['get', 'post'], 'register', function(){
    return redirect('/');
});

//->middleware('auth');
Route::group(['prefix' => 'admin', 'middleware' => 'auth.admin'], function(){
    Route::get('/', 'AdminController@index');

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

    Route::get('stores', ['as'=> 'admin.stores.index', 'uses' => 'StoreController@index']);
    Route::post('stores', ['as'=> 'admin.stores.store', 'uses' => 'StoreController@store']);
    Route::get('stores/create', ['as'=> 'admin.stores.create', 'uses' => 'StoreController@create']);
    Route::put('stores/{stores}', ['as'=> 'admin.stores.update', 'uses' => 'StoreController@update']);
    Route::patch('stores/{stores}', ['as'=> 'admin.stores.update', 'uses' => 'StoreController@update']);
    Route::delete('stores/{stores}', ['as'=> 'admin.stores.destroy', 'uses' => 'StoreController@destroy']);
    Route::get('stores/{stores}', ['as'=> 'admin.stores.show', 'uses' => 'StoreController@show']);
    Route::get('stores/{stores}/edit', ['as'=> 'admin.stores.edit', 'uses' => 'StoreController@edit']);


    Route::get('storeCategories', ['as'=> 'admin.storeCategories.index', 'uses' => 'StoreCategoryController@index']);
    Route::post('storeCategories', ['as'=> 'admin.storeCategories.store', 'uses' => 'StoreCategoryController@store']);
    Route::get('storeCategories/create', ['as'=> 'admin.storeCategories.create', 'uses' => 'StoreCategoryController@create']);
    Route::put('storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.update', 'uses' => 'StoreCategoryController@update']);
    Route::patch('storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.update', 'uses' => 'StoreCategoryController@update']);
    Route::delete('storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.destroy', 'uses' => 'StoreCategoryController@destroy']);
    Route::get('storeCategories/{storeCategories}', ['as'=> 'admin.storeCategories.show', 'uses' => 'StoreCategoryController@show']);
    Route::get('storeCategories/{storeCategories}/edit', ['as'=> 'admin.storeCategories.edit', 'uses' => 'StoreCategoryController@edit']);


    Route::get('contacts', ['as'=> 'admin.contacts.index', 'uses' => 'ContactController@index']);
//    Route::post('contacts', ['as'=> 'admin.contacts.store', 'uses' => 'ContactController@store']);
//    Route::get('contacts/create', ['as'=> 'admin.contacts.create', 'uses' => 'ContactController@create']);
//    Route::put('contacts/{contacts}', ['as'=> 'admin.contacts.update', 'uses' => 'ContactController@update']);
//    Route::patch('contacts/{contacts}', ['as'=> 'admin.contacts.update', 'uses' => 'ContactController@update']);
    Route::delete('contacts/{contacts}', ['as'=> 'admin.contacts.destroy', 'uses' => 'ContactController@destroy']);
    Route::get('contacts/{contacts}', ['as'=> 'admin.contacts.show', 'uses' => 'ContactController@show']);
//    Route::get('contacts/{contacts}/edit', ['as'=> 'admin.contacts.edit', 'uses' => 'ContactController@edit']);


});



Route::get('artisan', ['as'=> 'admin.artisan.index', 'uses' => 'ArtisanController@index'])->middleware('auth.admin');
