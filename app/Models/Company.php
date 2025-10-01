<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
        'name',
        'name_ar',
        'description',
        'description_ar',
        'location',
        'location_ar',
        'logo_path',
        'logo_original_name',
        'logo_mime_type',
        'logo_size',
        'website',
        'linkedin',
        'twitter',
        'instagram',
        'facebook',
        'youtube',
        'whatsapp',
        'email',
        'phone',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }
}
