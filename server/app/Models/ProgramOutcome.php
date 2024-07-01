<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProgramOutcome extends Model
{
    use HasFactory;

    protected $table = 'program_outcome';

    protected $fillable = [
        'po_desc',
        'program_id',
        'seq_num'
    ];

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }

    public function performance_indicators(): HasMany
    {
        return $this->HasMany(PerformanceIndicator::class, 'po_id');
    }
}
