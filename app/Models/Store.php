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
 * @property string slug
 * @property string logo
 * @property string html_ro
 * @property string html_ru
 * @property string json_coords
 * @property int $id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Product[] $products
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\StoreCategory[] $storeCategories
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereDescriptionRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereNameRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereNameRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereHtmlRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereHtmlRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereSlug($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Category[] $categories
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Store whereJsonCoords($value)
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
        'logo',
        'html_ro',
        'html_ru',
        'slug',
        'json_coords'
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
        'logo' => 'string',
        'slug' => 'string',
        'json_coords' => 'json'
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
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     **/
    public function product()
    {
        return $this->hasOne(\App\Models\Product::class)->whereRaw('until >= CURDATE() ')->inRandomOrder();
    }


//    public function storeCategories()
//    {
//        return $this->hasMany(\App\Models\StoreCategory::class);
//    }

    public function categories()
    {
        return $this->belongsToMany(\App\Models\Category::class, 'store_categories', 'store_id', 'category_id' );
    }

    public function getName()
    {
        return $this['name_'.app()->getLocale()];
    }

    public function getDescription()
    {
        return $this['description_'.app()->getLocale()];
    }

    public function getHtml()
    {
        return $this['html_'.app()->getLocale()];
    }

    /**
     * Boot the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::deleting(function ($product) {
            \Storage::delete($product->logo);
        });

        static::updating(function ($product) {
            $input = \Request::all();

            if(isset($input['logo'])) {
                \Storage::delete($product->getOriginal('logo'));
                $product->logo = \Storage::putFile('', \Request::file('logo'));
            }
        });

    }
}
