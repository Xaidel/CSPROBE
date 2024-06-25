<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PEO extends Model
{
    use HasFactory;

    protected $table = 'peo';

    protected $fillable = [
        'peo_desc',
        'program_id'
    ];

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }

}
