<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Eloquent\Collection;

class GetUserRole
{

    public static function getAllRoles(User $user)
    {
        return UserRole::where('userID', $user->userID)->with('role')->get()->pluck('role');
    }

    public static function getAllRolesByID(int $user)
    {
        return UserRole::find($user)->with('role')->get()->pluck('role');
    }

    public static function isProgramHead(User $user): bool
    {
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Program Head');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Program Head');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

    public static function isProgramHeadByID(int $id): bool
    {
        $user = User::find($id);
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Program Head');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Program Head');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

    public static function isDean(User $user): bool
    {
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Dean');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Dean');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

    public static function isDeanById(int $id)
    {
        $user = User::find($id);
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Dean');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Dean');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

    public static function isAsstDean(User $user): bool
    {
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Assistant Dean');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Assistant Dean');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

    public static function isFaculty(User $user): bool
    {
        return (bool) UserRole::where('userID', $user->userID)
            ->whereHas('role', function ($query) {
                $query->where('role_name', 'Faculty');
            })
            ->with([
                'role' => function ($query) {
                    $query->where('role_name', 'Faculty');
                }
            ])
            ->get()
            ->pluck('role')->isNotEmpty();
    }

}