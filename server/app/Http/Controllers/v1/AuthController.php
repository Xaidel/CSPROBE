<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostUserRequest;
use App\Models\User;
use App\Models\UserRole;
use App\Services\GetUserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registerUser(PostUserRequest $request)
    {
        $validUser = $request->validated();
        $isUserAvailable = User::where('userID', $validUser['userID'])->first();
        if ($isUserAvailable) {
            return response([
                'message' => 'User ID Already Exists',
            ]);
        }

        $user = User::create($validUser);

        return response([
            'user' => $user
        ]);

    }

    public function loginUser(PostUserRequest $request)
    {
        $validUser = $request->validated();
        $user = User::where('userID', $validUser['userID'])->first();

        if (!$user || !Hash::check($validUser['password'], $user->password)) {
            return response([
                'message' => 'Invalid Credentials'
            ], 401);
        }

        $token = $user->createToken(env('APP_TOKEN_IDENTIFIER'))->plainTextToken;
        $roles = GetUserRole::getAllRoles($user);

        return response([
            'user' => $user,
            'token' => $token,
            'roles' => $roles
        ]);

    }

    public function logoutUser(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => "Logged Out"
        ];

    }

}
