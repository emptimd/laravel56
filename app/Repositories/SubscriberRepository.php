<?php

namespace App\Repositories;

use App\Models\Subscriber;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class SubscriberRepository
 * @package App\Repositories
 * @version September 7, 2018, 12:28 pm EEST
 *
 * @method Subscriber findWithoutFail($id, $columns = ['*'])
 * @method Subscriber find($id, $columns = ['*'])
 * @method Subscriber first($columns = ['*'])
*/
class SubscriberRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'email',
        'is_active',
        'token'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Subscriber::class;
    }
}
