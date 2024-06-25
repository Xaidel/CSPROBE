<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Program extends Model
{
    use HasFactory;

    protected $table = 'program';
    protected $fillable = [
        'program_code',
        'program_description',
        'department_id'
    ];

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function program_outcomes(): HasMany
    {
        return $this->HasMany(ProgramOutcome::class);
    }

    public function peos(): HasMany
    {
        return $this->HasMany(PEO::class);
    }
}
