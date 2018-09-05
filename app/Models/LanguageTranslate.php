<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class LanguageTranslate
 *
 * @package App\Models
 * @version November 23, 2016, 10:42 pm UTC
 * @property integer $id
 * @property \App\Models\Language $language
 * @property string $translation
 * @property-read \App\Models\LanguageSource $languageSource
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageTranslate whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageTranslate whereLanguage($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageTranslate whereTranslation($value)
 * @mixin \Eloquent
 */
class LanguageTranslate extends Model
{

    public $table = 'language_translate';
    public $timestamps = false;
    protected $primaryKey = ['id', 'language'];
    public $incrementing = false;



    public $fillable = [
        'id',
        'language',
        'translation'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'language' => 'string',
        'translation' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function languageSource()
    {
        return $this->belongsTo(\App\Models\LanguageSource::class, 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function language()
    {
        return $this->belongsTo(\App\Models\Language::class);
    }


    /**
     * Set the keys for a save update query.
     * This is a fix for tables with composite keys
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery(\Illuminate\Database\Eloquent\Builder $query) {
        if (is_array($this->primaryKey)) {
            foreach ($this->primaryKey as $pk) {
                $query->where($pk, '=', $this->original[$pk]);
            }
            return $query;
        }else{
            return parent::setKeysForSaveQuery($query);
        }
    }
}
