<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory;

    protected $table = 'role';

    protected $fillable = [
        'role_name'
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, UserRole::class, 'role_id', 'userID')->withTimestamps();
    }

}
