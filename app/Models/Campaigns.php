<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Model;

/**
 * Class Campaigns
 *
 * @package App\Models
 * @version August 23, 2018, 12:17 am UTC
 * @property \Illuminate\Database\Eloquent\Collection CampaignAnchor
 * @property \Illuminate\Database\Eloquent\Collection CampaignBacklink
 * @property \Illuminate\Database\Eloquent\Collection CampaignBacklinksStash
 * @property \Illuminate\Database\Eloquent\Collection CampaignDomain
 * @property \Illuminate\Database\Eloquent\Collection CampaignParticipant
 * @property \Illuminate\Database\Eloquent\Collection CampaignSubscriber
 * @property \Illuminate\Database\Eloquent\Collection Crock
 * @property \Illuminate\Database\Eloquent\Collection DomainSocial
 * @property \Illuminate\Database\Eloquent\Collection EngagedcountApiCall
 * @property \Illuminate\Database\Eloquent\Collection GoogleAnalityc
 * @property \Illuminate\Database\Eloquent\Collection GoogleAnalitycsBacklink
 * @property \Illuminate\Database\Eloquent\Collection Market
 * @property \Illuminate\Database\Eloquent\Collection marketProducts
 * @property \Illuminate\Database\Eloquent\Collection Notification
 * @property \Illuminate\Database\Eloquent\Collection TargetSocial
 * @property \Illuminate\Database\Eloquent\Collection TopicalTrustTarget
 * @property \Illuminate\Database\Eloquent\Collection UserAddBacklink
 * @property integer user_id
 * @property string url
 * @property string ip
 * @property boolean stage
 * @property boolean stage_status
 * @property smallInteger recheck_nr
 * @property boolean to_recheck
 * @property boolean is_backlinkcontrol
 * @property boolean citation_flow
 * @property boolean trust_flow
 * @property boolean is_demo
 * @property int $id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereCitationFlow($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereIsBacklinkcontrol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereIsDemo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereRecheckNr($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereStageStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereToRecheck($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereTrustFlow($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Campaigns whereUserId($value)
 * @mixin \Eloquent
 */
class Campaigns extends Model
{

    public $table = 'campaigns';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';



    public $fillable = [
        'user_id',
        'url',
        'ip',
        'stage',
        'stage_status',
        'recheck_nr',
        'to_recheck',
        'is_backlinkcontrol',
        'citation_flow',
        'trust_flow',
        'is_demo'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'url' => 'string',
        'ip' => 'string',
        'stage' => 'boolean',
        'stage_status' => 'boolean',
        'to_recheck' => 'boolean',
        'is_backlinkcontrol' => 'boolean',
        'citation_flow' => 'boolean',
        'trust_flow' => 'boolean',
        'is_demo' => 'boolean'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
