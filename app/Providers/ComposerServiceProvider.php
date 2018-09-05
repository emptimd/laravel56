<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
//        View::composer(
//            'profile', 'App\Http\ViewComposers\ProfileComposer'
//        );

        // Using Closure based composers...
        View::composer('frontend._sidebar', function ($view) {
            $recent_products = \App\Models\Product::activeDate()->orderBy('id', 'desc')->limit(4)->get();
            $expire_products = \App\Models\Product::activeDate()->orderBy('until', 'asc')->limit(4)->get();

            $store_logos = \App\Models\Store::get(['slug', 'name_ro', 'name_ru', 'logo']);

            $view->with(['recent_products' => $recent_products, 'expire_products' => $expire_products, 'store_logos' => $store_logos]);
        });
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}