<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PerformanceIndicator extends Model
{
    use HasFactory;

    protected $table = 'performance_indicator';

    protected $fillable = [
        'pi_desc',
        'po_id',
        'course_id'
    ];

    public function po(): BelongsTo
    {
        return $this->belongsTo(ProgramOutcome::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function at(): BelongsTo
    {
        return $this->belongsTo(AssessmentTool::class);
    }

}
