<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class ProductPhoto
 *
 * @package App\Models
 * @version August 28, 2018, 3:54 am EEST
 * @property \App\Models\Product product
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection storeCategories
 * @property integer product_id
 * @property string path_ro
 * @property string path_ru
 * @property int $id
 * @property int $product_id
 * @property string $path_ro
 * @property string $path_ru
 * @property-read \App\Models\Product $product
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProductPhoto whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProductPhoto wherePathRo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProductPhoto wherePathRu($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\ProductPhoto whereProductId($value)
 * @mixin \Eloquent
 */
class ProductPhoto extends Model
{

    public $table = 'product_photos';

    public $timestamps = false;



    public $fillable = [
        'product_id',
        'path_ro',
        'path_ru'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'product_id' => 'integer',
        'path_ro' => 'string',
        'path_ru' => 'string'
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
    public function product()
    {
        return $this->belongsTo(\App\Models\Product::class);
    }

    public function getPath()
    {
        return $this['path_'.app()->getLocale()] ? $this['path_'.app()->getLocale()] : $this['path_ro'];
    }

    /**
     * Boot the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::deleting(function ($photo) {
            \Storage::delete($photo->path_ro);
            \Storage::delete($photo->path_ru);

//            if($product->path_ro && \Storage::exists($product->path_ro)) {
//                \Storage::delete($product->path_ro);
//                \Storage::delete($product->path_ru);
//            }

        });
    }

}
