<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Jenssegers\Agent\Facades\Agent;

class CatalogController extends AppBaseController
{


    public function view($slug, Request $request)
    {
        $isMobile = Agent::isMobile();
//        $isMobile = true;

        $model = Product::whereSlug($slug)->with(['productPhotos' => function($q) {
            $q->where('path_ro', '<>', null);
        }])->firstOrFail();

        $spreads = $translations = [];
        $i=0;
        foreach($model->productPhotos as $photo) {
            if($i == 0) {
                $spreads[] = ['pages' => [['images' => ["at600" => '/storage/'.$photo->getPath(), "at200" => '/storage/'.$photo->getPath()]]]]; $i++; continue;
            }
            if($i % 2 == 1) {
                $spreads[] = [
                    'pages' => [
                        [
                            'images' => [
                                "at600" => '/storage/'.$photo->getPath(), "at200" => '/storage/'.$photo->getPath()
                            ]
                        ],
                    ]
                ];
            }else {
                $spreads[count($spreads)-1]['pages'][] = [
                    'images' => [
                        "at600" => '/storage/'.$photo->getPath(), "at200" => '/storage/'.$photo->getPath()
                    ]
                ];
            }
            $i++;
        }

//        $translations;
        /*Translations*/
        if(app()->getLocale() == 'ro') {
            $translations = [
//                'page' => 'Pagină',
                'spread_overview' => [
                    'label' => 'Prezentare generală pagină'
                ]
            ];
        }else {
            $translations = [
//                'page' => 'Страница',
                'spread_overview' => [
                    'label' => 'Обзор страниц'
                ]
            ];
        }

//        return $translations;

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


        return view('frontend.catalog', ['model' => $model, 'spreads' => $spreads, 'translations' => $translations, 'isMobile' => $isMobile]);
    }
}
