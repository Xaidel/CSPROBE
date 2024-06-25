<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $table = 'course';

    protected $fillable = [
        'name',
        'unit',
        'hours',
        'pi_id'
    ];


    public function pis(): HasMany
    {
        return $this->hasMany(PerformanceIndicator::class);
    }

}
