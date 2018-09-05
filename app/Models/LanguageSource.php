<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class LanguageSource
 *
 * @package App\Models
 * @version November 23, 2016, 5:58 pm UTC
 * @property integer $id
 * @property string $category
 * @property string $message
 * @property-read \App\Models\LanguageTranslate $languageTranslate
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageSource whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageSource whereCategory($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Models\LanguageSource whereMessage($value)
 * @mixin \Eloquent
 */
class LanguageSource extends Model
{

    public $table = 'language_source';
    public $timestamps = false;


    const INSERT_LANGUAGE_ITEMS_LIMIT = 10;


    public $fillable = [
        'category',
        'message'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'category' => 'string',
        'message' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'message' => 'string',
        'category' => 'string|max:32'
    ];



    /**
     * Inserting new language elements into the language_source table.
     * @param array $languageItems
     * @return integer The number of new language elements.
     */
    public function insertLanguageItems($languageItems)
    {

        $data = [];
        foreach ($languageItems as $category => $messages) {
            foreach (array_keys($messages) as $message) {
                $data[] = [
                    $category,
                    $message
                ];
            }
        }



        $count = count($data);
        for ($i = 0; $i < $count; $i += self::INSERT_LANGUAGE_ITEMS_LIMIT) {
            static::getDb()
                ->createCommand()
                ->batchInsert(static::tableName(), ['category', 'message'], array_slice($data, $i, self::INSERT_LANGUAGE_ITEMS_LIMIT))
                ->execute();
        }

        return $count;
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     **/
    public function languageTranslate()
    {
        return $this->hasOne(\App\Models\LanguageTranslate::class, 'id');
    }
}
