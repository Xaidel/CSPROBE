<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AssessmentTool extends Model
{
    use HasFactory;

    protected $table = 'assessment_tool';

    protected $fillable = [
        'tool'
    ];


    public function pis(): HasMany
    {
        return $this->hasMany(PerformanceIndicator::class);
    }


}
