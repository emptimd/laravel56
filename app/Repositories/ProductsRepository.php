<?php

namespace App\Repositories;

use App\Models\Products;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ProductsRepository
 * @package App\Repositories
 * @version August 25, 2018, 3:39 am EEST
 *
 * @method Products findWithoutFail($id, $columns = ['*'])
 * @method Products find($id, $columns = ['*'])
 * @method Products first($columns = ['*'])
*/
class ProductsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name_ro',
        'description_ro',
        'path_ro',
        'name_ru',
        'description_ru',
        'path_ru',
        'until',
        'category_id',
        'store_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Products::class;
    }
}
