<?php

use App\Http\Controllers\v1\AssessmentToolController;
use App\Http\Controllers\v1\AssignRoleController;
use App\Http\Controllers\V1\AuthController;
use App\Http\Controllers\v1\CourseController;
use App\Http\Controllers\v1\DepartmentController;
use App\Http\Controllers\v1\PEOController;
use App\Http\Controllers\v1\PerformanceIndicatorController;
use App\Http\Controllers\v1\ProgramController;
use App\Http\Controllers\v1\ProgramOutcomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/register', [AuthController::class, 'registerUser']);
        Route::post('/login', [AuthController::class, 'loginUser']);
        Route::post('/logout', [AuthController::class, 'logoutUser'])->middleware('auth:sanctum');
    });

    //Secure Routes
    Route::apiResource('/department', DepartmentController::class)->middleware('auth:sanctum');
    Route::apiResource('/program', ProgramController::class)->middleware('auth:sanctum');
    Route::post('assign-role', AssignRoleController::class)->middleware(['auth:sanctum', 'isdean']);
    Route::apiResource('/program-outcome', ProgramOutcomeController::class)->middleware(['auth:sanctum', 'isprogramhead']);
    Route::get('/program-outcome-progCode/{program_code}', [ProgramOutcomeController::class, "showByProgramCode"])->middleware(['auth:sanctum', 'isprogramhead']);
    Route::apiResource('peo', PEOController::class)->middleware(["auth:sanctum", 'isprogramhead']);
    Route::apiResource('performance-indicator', PerformanceIndicatorController::class)->middleware(['auth:sanctum', 'isprogramhead']);
    Route::apiResource('/course', CourseController::class)->middleware(['auth:sanctum', 'isprogramhead']);
    Route::apiResource('/assessment-tool', AssessmentToolController::class)->middleware(['auth:sanctum', 'isprogramhead']);
});



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
