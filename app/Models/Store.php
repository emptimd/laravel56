<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Store
 *
 * @package App\Models
 * @version August 28, 2018, 3:54 am EEST
 * @property \Illuminate\Database\Eloquent\Collection Product
 * @property \Illuminate\Database\Eloquent\Collection StoreCategory
 * @property string name_ro
 * @property string name_ru
 * @property string description_ro
 * @property string description_ru
 * @property string logo
 * @property int $id
 * @property string $name_ro
 * @property string $name_ru
 * @property string $description_ro
 * @property string $description_ru
 * @property string $logo
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\StoreCategory[] $storeCategories
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereDescriptionRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereNameRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereNameRu($value)
 * @mixin \Eloquent
 */
class Store extends Model
{

    public $table = 'stores';

    public $timestamps = false;

    public $fillable = [
        'name_ro',
        'name_ru',
        'description_ro',
        'description_ru',
        'logo'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'name_ro' => 'string',
        'name_ru' => 'string',
        'description_ro' => 'string',
        'description_ru' => 'string',
        'logo' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name_ro' => 'required|max:255|unique:stores',
        'name_ru' => 'required|max:255|unique:stores',
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
