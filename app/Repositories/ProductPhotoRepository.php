<?php

namespace App\Repositories;

use App\Models\ProductPhoto;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ProductPhotoRepository
 * @package App\Repositories
 * @version August 28, 2018, 3:54 am EEST
 *
 * @method ProductPhoto findWithoutFail($id, $columns = ['*'])
 * @method ProductPhoto find($id, $columns = ['*'])
 * @method ProductPhoto first($columns = ['*'])
*/
class ProductPhotoRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'product_id',
        'path_ro',
        'path_ru'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ProductPhoto::class;
    }
}
