<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Language
 *
 * @package App\Models
 * @version November 23, 2016, 3:39 pm UTC
 * @property string $language_id
 * @property string $language
 * @property string $country
 * @property string $name
 * @property string $name_ascii
 * @property integer $status
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\LanguageTranslate[] $languageTranslates
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereLanguageId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereLanguage($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereCountry($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereNameAscii($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\Language whereStatus($value)
 * @mixin \Eloquent
 */
class Language extends Model
{

    public $table = 'language';
    protected $primaryKey = 'language_id';
    public $timestamps = false;
//    protected $perPage = 25;

    /**
     * Status of inactive language.
     */
    const STATUS_INACTIVE = 0;

    /**
     * Status of active language.
     */
    const STATUS_ACTIVE = 1;

    /**
     * Status of ‘beta’ language.
     */
    const STATUS_BETA = 2;

    /**
     * Array containing possible states.
     * @var array
     * @translate
     */
    private static $_CONDITIONS = [
        self::STATUS_INACTIVE => 'Inactive',
        self::STATUS_ACTIVE => 'Active',
        self::STATUS_BETA => 'Beta',
    ];

    public $fillable = [
        'language_id',
        'language',
        'country',
        'name',
        'name_ascii',
        'status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'language_id' => 'string',
        'language' => 'string',
        'country' => 'string',
        'name' => 'string',
        'name_ascii' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'language_id' => ['required', 'unique:language', 'min:5', 'max:5', 'regex:/^([a-z]{2}[_-][A-Z]{2}|[a-z]{2})$/'],
        'language' => ['required', 'max:2', 'regex:/^[a-z]{2}$/i'],
        'country' => ['required', 'max:2', 'regex:/^[a-z]{2}$/i'],
        'name' => 'required|max:32',
        'name_ascii' => 'required|max:32',
        'status' => 'integer|between:0,2'
    ];



    /**
     * Returns the state of the language (Active, Inactive or Beta) in the current language.
     * @return string
     */
    public function getStatusName() {
        return self::$_CONDITIONS[$this->status];
    }

    /**
     * Returns the names of possible states in an associative array.
     * @return array
     */
    public static function getStatusNames() {
        return self::$_CONDITIONS;
    }


    /**
     * Returns the completness of a given translation (language).
     * @return integer
     */
    public function getGridStatistic() {
        static $statistics;
        if (!$statistics) {
            $count = LanguageSource::all()->count();
            if ($count == 0) {
                return 0;
            }

            $languageTranslates = LanguageTranslate::
            select(['language', \DB::raw('COUNT(*) AS cnt')])
                ->whereNotNull('translation')
                ->groupBy(['language'])
                ->get();

            foreach ($languageTranslates as $languageTranslate) {
                $statistics[$languageTranslate->language] = floor(($languageTranslate->cnt / $count) * 100);
            }
        }

        return isset($statistics[$this->language_id]) ? $statistics[$this->language_id] : 0;
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function languageTranslates()
    {
        return $this->hasMany(\App\Models\LanguageTranslate::class);
    }
}
