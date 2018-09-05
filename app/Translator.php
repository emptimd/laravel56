<?php

namespace App;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Loader;

class Translator extends \Illuminate\Translation\Translator
{

    protected $app = null;
    public function __construct(DatabaseLoader $database, Loader $loader, $locale, Application $app)
    {
        $this->database = $database;
        $this->app = $app;
        parent::__construct($loader, $locale);
    }


    protected static function isNamespaced($namespace)
    {
        return !(is_null($namespace) || $namespace == '*');
    }


    /**
     * Get the translation for the given key.
     *
     * @param  string  $key
     * @param  array   $replace
     * @param  string  $locale
     * @param  bool	   $fallback
     * @return string
     */
    public function get($key, array $replace = array(), $locale = null, $fallback = true)
    {
        list($namespace, $group, $item) = $this->parseKey($key);
        // Here we will get the locale that should be used for the language line. If one
        // was not passed, we will use the default locales which was given to us when
        // the translator was instantiated. Then, we can load the lines and return.

        foreach ($this->parseLocale($locale) as $locale)
        {
            $this->load($namespace, $group, $locale);
            $line = $this->getLine(
                $namespace, $group, $locale, $item, $replace
            );
//            // If we cannot find the translation group in the database nor as a file
//            // an entry in the database will be added to the translations.
//            // Keep in mind that a file cannot be used from that point.
//            if(!self::isNamespaced($namespace) && is_null($line)) {
////                dd($item);
//                throw new \Exception($line);
//
//                throw new \Exception(12);
//                // Database stuff
//                $this->database->addTranslation($locale, $group, $key);
//            }
            if ( ! is_null($line)) break;
        }
        // If the line doesn't exist, we will return back the key which was requested as
        // that will be quick to spot in the UI if language keys are wrong or missing
        // from the application's language files. Otherwise we can return the line.
        if ( ! isset($line)) return $key;
        return $line;
    }


    public function load($namespace, $group, $locale)
    {
        if ($this->isLoaded($namespace, $group, $locale)) return;
//        dd($group);
//        dd($locale);
        // If a Namespace is give the Filesystem will be used
        // otherwise we'll use our database.
        // This will allow legacy support.
        if(!self::isNamespaced($namespace) && !in_array($group, ['auth', 'pagination', 'passwords', 'validation'])) {
            // If debug is off then cache the result forever to ensure high performance.
            if(!\Config::get('app.debug') || true) {
                $that = $this;
                $lines = \Cache::rememberForever('__translations.'.$locale.'.'.$group, function() use ($that, $locale, $group, $namespace) {
                    return $that->loadFromDatabase($namespace, $group, $locale);
                });
            } else {

                $lines = $this->loadFromDatabase($namespace, $group, $locale);
            }
        } else {
            $lines = $this->loader->load($locale, $group, $namespace);
        }
        $this->loaded[$namespace][$group][$locale] = $lines;

    }


    /**
     * @param $namespace
     * @param $group
     * @param $locale
     * @return array
     */
    protected function loadFromDatabase($namespace, $group, $locale)
    {
        $lines = $this->database->load($locale, $group, $namespace);

        if (count($lines) == 0) {
            $lines = $this->loader->load($locale, $group, $namespace);
            return $lines;
        }
        return $lines;
    }

    /**
     * Get the array of locales to be checked.
     *
     * @param  string|null  $locale
     * @return array
     */
    protected function parseLocale($locale)
    {
        return [$this->locale , substr($this->locale, 0, -3), $this->fallback];
    }

}