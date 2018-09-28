<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Subscriber
 *
 * @package App\Models
 * @version September 7, 2018, 12:28 pm EEST
 * @property \Illuminate\Database\Eloquent\Collection languageTranslate
 * @property \Illuminate\Database\Eloquent\Collection products
 * @property \Illuminate\Database\Eloquent\Collection storeCategories
 * @property string email
 * @property boolean is_active
 * @property string token
 * @property int $id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Subscriber whereUpdatedAt($value)
 * @mixin \Eloquent
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
