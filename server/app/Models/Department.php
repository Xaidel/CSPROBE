<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;

    protected $table = 'department';
    protected $fillable = [
        'department_code',
        'department_name'
    ];

    public function programs(): HasMany
    {
        return $this->hasMany(Program::class);
    }

}
