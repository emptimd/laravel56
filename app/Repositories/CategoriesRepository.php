<?php

namespace App\Repositories;

use App\Models\Categories;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class CategoriesRepository
 * @package App\Repositories
 * @version August 25, 2018, 2:10 am EEST
 *
 * @method Categories findWithoutFail($id, $columns = ['*'])
 * @method Categories find($id, $columns = ['*'])
 * @method Categories first($columns = ['*'])
*/
class CategoriesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name_ro',
        'name_ru'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Categories::class;
    }
}
