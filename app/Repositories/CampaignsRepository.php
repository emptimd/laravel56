<?php

namespace App\Repositories;

use App\Models\Campaigns;
use InfyOm\Generator\Common\BaseRepository;

class CampaignsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Campaigns::class;
    }
}
