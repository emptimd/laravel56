<?php

namespace App\Repositories;

use App\Models\StoreCategory;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class StoreCategoryRepository
 * @package App\Repositories
 * @version August 28, 2018, 3:54 am EEST
 *
 * @method StoreCategory findWithoutFail($id, $columns = ['*'])
 * @method StoreCategory find($id, $columns = ['*'])
 * @method StoreCategory first($columns = ['*'])
*/
class StoreCategoryRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'category_id',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return StoreCategory::class;
    }
}
