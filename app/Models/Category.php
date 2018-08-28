<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Category
 *
 * @package App\Models
 * @version August 28, 2018, 3:05 am EEST
 * @property \Illuminate\Database\Eloquent\Collection Product
 * @property \Illuminate\Database\Eloquent\Collection StoreCategory
 * @property string name_ro
 * @property string name_ru
 * @property string description_ro
 * @property string description_ru
 * @property bool $id
 * @property string $name_ro
 * @property string $name_ru
 * @property string $description_ro
 * @property string $description_ru
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\StoreCategory[] $storeCategories
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereDescriptionRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereNameRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Category whereNameRu($value)
 * @mixin \Eloquent
 */
class Category extends Model
{

    public $table = 'categories';

    public $timestamps = false;



    public $fillable = [
        'name_ro',
        'name_ru',
        'description_ro',
        'description_ru'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'boolean',
        'name_ro' => 'string',
        'name_ru' => 'string',
        'description_ro' => 'string',
        'description_ru' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name_ro' => 'required|max:255|unique',
        'name_ru' => 'required|max:255|unique',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function products()
    {
        return $this->hasMany(\App\Models\Product::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function storeCategories()
    {
        return $this->hasMany(\App\Models\StoreCategory::class);
    }
}
