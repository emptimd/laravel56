<?php

namespace App\Models;

use Carbon\Carbon;
use Eloquent as Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Product
 *
 * @package App\Models
 * @version August 28, 2018, 3:09 am EEST
 * @property \App\Models\Category category
 * @property \App\Models\Store store
 * @property \Illuminate\Database\Eloquent\Collection ProductPhoto
 * @property \Illuminate\Database\Eloquent\Collection storeCategories
 * @property string name_ro
 * @property string description_ro
 * @property string path_ro
 * @property string name_ru
 * @property string description_ru
 * @property string path_ru
 * @property string slug
 * @property date until
 * @property boolean category_id
 * @property smallInteger store_id
 * @property integer views
 * @property int $id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProductPhoto[] $productPhotos
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereDescriptionRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereDescriptionRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereNameRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereNameRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product wherePathRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product wherePathRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereStoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereUntil($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereViews($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Product activeDate()
 * @mixin \Eloquent
 */
class Product extends Model
{

    public $table = 'products';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'name_ro',
        'description_ro',
        'path_ro',
        'name_ru',
        'description_ru',
        'path_ru',
        'until',
        'slug',
        'category_id',
        'store_id',
        'views'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name_ro' => 'string',
        'description_ro' => 'string',
        'path_ro' => 'string',
        'name_ru' => 'string',
        'description_ru' => 'string',
        'path_ru' => 'string',
        'until' => 'date:Y-m-d',
        'slug' => 'string',
        'category_id' => 'integer',
        'views' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name_ro' => 'required|max:255',
        'name_ru' => 'required|max:255',
        'until' => 'required',
    ];


    public function scopeActiveDate($query)
    {
        return $query->whereRaw('until >= CURDATE() ');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function category()
    {
        return $this->belongsTo(\App\Models\Category::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function store()
    {
        return $this->belongsTo(\App\Models\Store::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function productPhotos()
    {
        return $this->hasMany(\App\Models\ProductPhoto::class);
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
            \Storage::delete($product->path_ro);
            \Storage::delete($product->path_ru);

//            if($product->path_ro && \Storage::exists($product->path_ro)) {
//                \Storage::delete($product->path_ro);
//                \Storage::delete($product->path_ru);
//            }

        });

        static::updating(function ($product) {
            $input = \Request::all();

//            if($request->file('path_ro')) {
//                $path = $request->path_ro->store('');
//                $input['path_ro'] = $path;
//            }
//
//            if($request->file('path_ru')) {
//                $path = $request->path_ru->store('');
//                $input['path_ru'] = $path;
//            }


            if(isset($input['path_ro'])) {
                \Storage::delete($product->getOriginal('path_ro'));
                $product->path_ro = \Storage::putFile('', \Request::file('path_ro'));

            }

            if(isset($input['path_ru'])) {
                \Storage::delete($product->getOriginal('path_ru'));
                $product->path_ru = \Storage::putFile('', \Request::file('path_ru'));
            }
        });

    }

    public function getPath()
    {
        return $this['path_'.app()->getLocale()] ? $this['path_'.app()->getLocale()] : $this['path_ro'];
    }


    public function getName()
    {
        return $this['name_'.app()->getLocale()];
    }

    public function getDescription()
    {
        return $this['description_'.app()->getLocale()];
    }

    public function isExpired()
    {
        $now = Carbon::now();
        if($now->gt($this->until)) return true;

        return false;

    }/**/

}
