<?php

namespace App\Http\Controllers;

use App\DataTables\LanguageDataTable;
use App\DataTables\LanguageTDataTable;
use App\Http\Requests\CreateLanguageRequest;
use App\Http\Requests\UpdateLanguageRequest;
use App\Models\LanguageSource;
use App\Models\LanguageTranslate;
use App\Repositories\LanguageRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Response;
use Symfony\Component\Finder\Finder;

class LanguageController extends AppBaseController
{
    /** @var  LanguageRepository */
    private $languageRepository;

    /**
     * @var array excluded groups
     */
    private $exclude_groups = [];

    /**
     * @var array for storing language elements to be translated.
     */
    private $_languageElements = [];

    /**
     * @var array for storing removabla LanguageSource ids.
     */
    private $_removableLanguageSourceIds = [];

    /**
     * @var array of all language sources.
     */
    private $_languageSources = [];

    /**
     * @var array of all finded translations.
     */
    private $_scannedTranslations = [];


    /**
     * LanguageController constructor.
     * @param LanguageRepository $languageRepo
     */
    public function __construct(LanguageRepository $languageRepo)
    {
        $this->languageRepository = $languageRepo;
        $this->exclude_groups = ['validation'];



    }

    /**
     * Display a listing of the Language.
     *
     * @param LanguageDataTable $languageDataTable
     * @return Response
     */
    public function index(LanguageDataTable $languageDataTable)
    {
        return $languageDataTable->render('admin.languages.index');
    }

    /**
     * Show the form for creating a new Language.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.languages.create');
    }

    /**
     * Store a newly created Language in storage.
     *
     * @param CreateLanguageRequest $request
     *
     * @return Response
     */
    public function store(CreateLanguageRequest $request)
    {
        $input = $request->all();

        $language = $this->languageRepository->create($input);

        Flash::success('Language saved successfully.');

        return redirect(route('admin.languages.index'));
    }


    /**
     * @param $id
     * @return $this|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function show($id)
    {

//        dd((new Language())->getQualifiedKeyName());
//
//        $model = Language::findOrFail($id);
//        dd($model);

        $language = $this->languageRepository->findWithoutFail($id);

        if (empty($language)) {
            Flash::error('Language not found');

            return redirect(route('admin.languages.index'));
        }

        return view('admin.languages.show')->with('language', $language);
    }

    /**
     * Show the form for editing the specified Language.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $language = $this->languageRepository->findWithoutFail($id);

        if (empty($language)) {
            Flash::error('Language not found');

            return redirect(route('admin.languages.index'));
        }

        return view('admin.languages.edit')->with('language', $language);
    }

    /**
     * Update the specified Language in storage.
     *
     * @param  int              $id
     * @param UpdateLanguageRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateLanguageRequest $request)
    {

        $language = $this->languageRepository->findWithoutFail($id);

        if (empty($language)) {
            Flash::error('Language not found');

            return redirect(route('admin.languages.index'));
        }

        $language = $this->languageRepository->update($request->all(), $id);

        Flash::success('Language updated successfully.');

        return redirect(route('admin.languages.index'));
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function scan()
    {
        $arr = LanguageSource::all()->toArray();

        $this->findTranslations();
        foreach($arr as $item) {
            $this->unUsedKey($item['id'], $item['category'], $item['message']);
        }

        foreach($arr as $k => $v) {
            $this->_languageSources[$v['category']][] = $v['message'];
        }
        // Add the translations to the database, if not existing.
        foreach($this->_scannedTranslations as $key){
            // Split the group and item
            list($group, $item) = explode('.', $key, 2);
            $this->missingKey($group, $item);

        }

        return view('admin.languages.scan', ['languageElements' => $this->_languageElements, 'rLanguageElements' => $this->_removableLanguageSourceIds]);
    }


    /**
     * @param $id
     * @param LanguageDataTable|LanguageTDataTable $languageDataTable
     * @return \Illuminate\View\View
     * @internal param $id
     */
    public function translate($id, Request $request,LanguageTDataTable $languageDataTable)
    {

        $language = $this->languageRepository->findWithoutFail($id);

        if (empty($language)) {
            Flash::error('Language not found');

            return redirect(route('admin.languages.index'));
        }

//        return view('languages.translate')->with('language', $language);

        if(!request()->ajax()) {
            return $languageDataTable->render('admin.languages.translate')->with('language', $language);
        }

        return $languageDataTable->render('admin.languages.translate');
    }

    /**
     * Remove the specified Language from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $language = $this->languageRepository->findWithoutFail($id);

        if (empty($language)) {
            Flash::error('Language not found');

            return redirect(route('admin.languages.index'));
        }

        $this->languageRepository->delete($id);

        Flash::success('Language deleted successfully.');

        return redirect(route('admin.languages.index'));
    }


    /**
     * Remove the specified LanguageSources from storage.
     *
     * @param Request $request
     * @internal param string $ids
     */
    public function removeOld(Request $request)
    {
        $ids = explode(',', rtrim($request->input('ids'), ','));
        LanguageSource::destroy($ids);
    }

    /**
     * Remove the specified LanguageSources from storage.
     *
     * @param $id
     * @param Request $request
     * @throws \Exception
     * @internal param string $ids
     */
    public function save($id)
    {

//        throw new \Exception($id);
//        LanguageTranslate::find()
//        LanguageTranslate::
        $model = LanguageTranslate::where('id', $_POST['id'])->where('language', $id)->first();
        if($model) {
            $model->translation = $_POST['translation'];
            $model->save();
        }else {
            $model = LanguageTranslate::create(['id' => $_POST['id'], 'language' => $id, 'translation' => $_POST['translation']]);
        }

        $data = \DB::table('language_translate')
            ->join('language_source', 'language_translate.id', '=', 'language_source.id')
            ->where('category', '=', $model->languageSource->category)
            ->where('language', '=', $id)
            ->pluck('translation', 'message');

        \Cache::forever('__translations.'.$id.'.'.$model->languageSource->category, $data);

//        LanguageTranslate::updateOrCreate(['id' => $_POST['id'], 'translation' => $_POST['translation'], 'language' => $id]);
//        $ids = explode(',', rtrim($request->input('ids'), ','));
//        LanguageSource::destroy($ids);
    }


    /**
     * @param null $path
     */
    public function findTranslations($path = null)
    {

        $path = $path ?: base_path();
        $keys = array();
        $functions =  array('trans', 'trans_choice', 'Lang::get', 'Lang::choice', 'Lang::trans', 'Lang::transChoice', '@lang', '@choice');
        $pattern =                              // See http://regexr.com/392hu
            "[^\w|>]".                          // Must not have an alphanum or _ or > before real method
            "(".implode('|', $functions) .")".  // Must start with one of the functions
            "\(".                               // Match opening parenthese
            "[\'\"]".                           // Match " or '
            "(".                                // Start a new group to match:
            "[a-zA-Z0-9_-]+".               // Must start with group
            "([.][^\1)]+)+".                // Be followed by one or more items/keys
            ")".                                // Close group
            "[\'\"]".                           // Closing quote
            "[\),]";                            // Close parentheses or new parameter

        // Find all PHP files in the app folder, except for storage
        $finder = new Finder();
        $finder->in($path)->exclude(['storage', 'vendor', 'node_modules'])->name('*.php')->files();

        /** @var \Symfony\Component\Finder\SplFileInfo $file */
        foreach ($finder as $file) {
            // Search the current file for the pattern
            if(preg_match_all("/$pattern/siU", $file->getContents(), $matches)) {
                // Get all matches
                foreach ($matches[2] as $key) {
                    $keys[] = $key;
                }
            }
        }

        // Remove duplicates
        $this->_scannedTranslations = array_unique($keys);
    }


    /**
     * @param $group
     * @param $key
     */
    public function missingKey($group, $key)
    {
        if(!in_array($group, $this->exclude_groups) && (!isset($this->_languageSources[$group]) || !in_array($key, $this->_languageSources[$group]))) {
            $this->_languageElements[] = [$group, $key];
            LanguageSource::create([
                'category' => $group,
                'message' => $key,
            ]);
        }
    }

    /**
     * @param $id
     * @param $group
     * @param $key
     */
    public function unUsedKey($id, $group, $key)
    {
        if(in_array($group, $this->exclude_groups) || !in_array($group.'.'.$key, $this->_scannedTranslations)) {
            $this->_removableLanguageSourceIds[] = [$id, $group, $key];
        }
    }
}
