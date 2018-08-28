<?php

namespace App\Repositories;

use App\Models\Store;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class StoreRepository
 * @package App\Repositories
 * @version August 28, 2018, 3:54 am EEST
 *
 * @method Store findWithoutFail($id, $columns = ['*'])
 * @method Store find($id, $columns = ['*'])
 * @method Store first($columns = ['*'])
*/
class StoreRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name_ro',
        'name_ru',
        'description_ro',
        'description_ru',
        'logo'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Store::class;
    }
}
