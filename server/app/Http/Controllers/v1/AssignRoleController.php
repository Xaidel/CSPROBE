<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssignRoleRequest;
use App\Models\Role;
use App\Services\GetUserRole;
use App\Models\User;

class AssignRoleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(AssignRoleRequest $request)
    {
        $user = User::where('userID', $request->input('userID'))->first();
        $role = Role::where('role_name', $request->input('role_name'))->first();

        $userRoles = GetUserRole::getAllRoles($user)->firstWhere('role_name', $role->role_name);

        if ($userRoles) {
            $userRoles = GetUserRole::getAllRoles($user);
            return response([
                "user" => $user,
                "roles" => $userRoles
            ]);
        }
        $role->users()->attach($user->userID);
        $userRoles = GetUserRole::getAllRoles($user);
        return response([
            "user" => $user,
            "roles" => $userRoles
        ]);
    }
}
