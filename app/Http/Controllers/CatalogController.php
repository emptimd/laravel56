<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CatalogController extends AppBaseController
{


    public function view($slug, Request $request)
    {

        $locale = app()->getLocale();
        $model = Product::whereSlug($slug)->with(['productPhotos' => function($q) use($locale){
            $q->where('path_'.$locale, '<>', null);
        }])->firstOrFail();
//        dd($model->productPhotos);

        $expiresAt = Carbon::now()->endOfDay()->addSecond();
        $cache_name = date('Y-m-d').'_uniq_views_catalog_'.$model->id;
        $ip = $request->ip();
        /*Count uniq views*/
        if (Cache::has($cache_name)) {
            $ips = Cache::get($cache_name);
            if(!in_array($ip, $ips)) {
                $ips[] = $ip;
                Cache::put($cache_name, $ips, $expiresAt);
                /*Increment Product view*/
                $model->increment('views');
                $model->save();
            }
        }else {
            /*Increment Product view*/
            $model->increment('views');
            $model->save();
            Cache::put($cache_name, [$ip], $expiresAt);
        }


        return view('frontend.catalog', ['model' => $model]);
    }
}
