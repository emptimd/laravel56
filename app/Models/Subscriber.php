<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Subscriber
 * @package App\Models
 * @version September 7, 2018, 12:28 pm EEST
 *
 * @property \Illuminate\Database\Eloquent\Collection languageTranslate
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection storeCategories
 * @property string email
 * @property boolean is_active
 * @property string token
 */
class Subscriber extends Model
{

    public $table = 'subscribers';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'email',
        'is_active',
        'token'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'email' => 'string',
        'is_active' => 'boolean',
        'token' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
