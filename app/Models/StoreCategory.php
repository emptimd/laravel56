<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class StoreCategory
 *
 * @package App\Models
 * @version August 28, 2018, 3:54 am EEST
 * @property \App\Models\Category category
 * @property \App\Models\Store store
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property boolean category_id
 * @property smallInteger store_id
 * @property int $id
 * @property bool $category_id
 * @property int $store_id
 * @property-read \App\Models\Category $category
 * @property-read \App\Models\Store $store
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\StoreCategory whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\StoreCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\StoreCategory whereStoreId($value)
 * @mixin \Eloquent
 */
class StoreCategory extends Model
{

    public $table = 'store_categories';

    public $timestamps = false;

    public $fillable = [
        'category_id',
        'store_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'category_id' => 'integer'
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
}
