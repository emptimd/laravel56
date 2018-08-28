<?php

namespace App\Models;

use Eloquent as Model;

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
 * @property date until
 * @property boolean category_id
 * @property smallInteger store_id
 * @property integer views
 * @property int $id
 * @property string $name_ro
 * @property string $description_ro
 * @property string $path_ro
 * @property string $name_ru
 * @property string $description_ru
 * @property string $path_ru
 * @property \Carbon\Carbon $until
 * @property bool $category_id
 * @property int $store_id
 * @property int $views
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\Category $category
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProductPhoto[] $productPhotos
 * @property-read \App\Models\Store $store
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
        'until' => 'date',
        'category_id' => 'boolean',
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

}
