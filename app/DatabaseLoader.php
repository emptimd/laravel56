<?php

namespace App;

//use App\Providers\TranslationServiceProvider;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Translation\Loader;

class DatabaseLoader implements Loader
{
    protected $_app = null;

    public function __construct(Application $app)
    {
        $this->_app = $app;
    }

    /**
     * Load the messages for the given locale.
     *
     * @param  string $locale
     * @param  string $group
     * @param  string $namespace
     * @return array
     */
    public function load($locale, $group, $namespace = null)
    {

        //Because transfered from ro-RO to ro add second part manually
        $locale = $locale.'-'.mb_strtoupper($locale);

//        throw new \Exception(1234);
        return $data = \DB::table('language_translate')
            ->join('language_source', 'language_translate.id', '=', 'language_source.id')
            ->where('category', '=', $group)
            ->where('language', '=', $locale)
            ->pluck('translation', 'message');
//        return TranslationServiceProvider::pluckOrLists($query, 'value', 'name');
    }

    /**
     * Add a new namespace to the loader.
     * This function will not be used but is required
     * due to the LoaderInterface.
     * We'll just leave it here as is.
     *
     * @param  string $namespace
     * @param  string $hint
     * @return void
     */
    public function addNamespace($namespace, $hint)
    {
    }

    /**
     * Adds a new translation to the database or
     * updates an existing record if the viewed_at
     * updates are allowed.
     *
     * @param string $locale
     * @param $category
     * @param $key
     * @internal param string $group
     * @internal param string $name
     */
    public function addTranslation($locale, $category, $key)
    {
//        if (!\Config::get('app.debug') || true) return;
//        throw new \Exception($key);
        // Extract the real key from the translation.
        if (preg_match("/^{$category}\.(.*?)$/sm", $key, $match)) {
            $message = $match[1];
        } else {
            throw new \RuntimeException('Could not extract key from translation.');
        }
        $item = \DB::table('language_source')
            ->where('category', $category)
            ->where('message', $message)->first();
        $data = compact('category', 'message');
        if ($item === null) {
            \DB::table('language_source')->insert($data);
        }/* else {
            if ($this->_app['config']->get('translation-db.update_viewed_at')) {
                \DB::table('translations')->where('id', $item->id)->update($data);
            }
        }*/
    }

    /**
     * Add a new JSON path to the loader.
     *
     * @param  string  $path
     * @return void
     */
    public function addJsonPath($path) {

    }

    /**
     * Get an array of all the registered namespaces.
     *
     */
    public function namespaces() {

    }

}