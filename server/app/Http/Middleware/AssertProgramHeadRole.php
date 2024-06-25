<?php

namespace App\Http\Middleware;

use App\Services\GetUserRole;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AssertProgramHeadRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userId = Auth::user()->id;

        if (GetUserRole::isProgramHeadByID($userId))
            return $next($request);
        return response([
            'message' => 'User is not a Program Head',
        ]);
    }
}
