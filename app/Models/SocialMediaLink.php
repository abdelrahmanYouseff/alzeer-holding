<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialMediaLink extends Model
{
    protected $fillable = [
        'facebook',
        'twitter',
        'linkedin',
        'instagram',
    ];
}
