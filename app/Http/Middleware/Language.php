<?php

namespace App\Http\Middleware;

use Closure, Config, App, Redirect;
use Illuminate\Support\Facades\Cookie;

class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        throw new \Exception(1);
//        dd(1232);

//        dd($request);
//        dd($request->path());
//        dd($request->segment(1));
//        dd($request->segments());


//        dd(Cookie::has('lang'));

        $locale = $request->segment(1);

        if (in_array($locale, Config::get('app.skip_locales'))) {
            return $next($request);
        }

        if ( ! array_key_exists($locale, Config::get('app.locales'))) {


            //check lang in coockie
            if (Cookie::has('lang') && array_key_exists(Cookie::get('lang'), Config::get('app.locales'))) {
                $lang = Cookie::get('lang');
            }elseif(array_key_exists($request->getPreferredLanguage(), Config::get('app.locales'))) {
                $lang = $request->getPreferredLanguage();
            }
            else {
                $lang = Config::get('app.fallback_locale');
            }


            return Redirect::to($lang.'/'.$request->path());
        }

        //set cookie if need
        if (!Cookie::has('lang') || Cookie::get('lang') !== $locale) {
//            dd($locale);
            Cookie::queue(Cookie::forever('lang', $locale));


        }
        App::setLocale($locale);

        return $next($request);
    }
}
