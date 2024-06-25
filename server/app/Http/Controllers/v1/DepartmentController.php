<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DepartmentResource::collection(Department::with('programs')->get());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(DepartmentRequest $request)
    {
        $validDepartment = $request->validated();

        $existingDepartment = Department::firstWhere('department_name', $validDepartment['department_name']);

        if ($existingDepartment) {
            return DepartmentResource::make($existingDepartment);
        }

        $newDepartment = Department::create($validDepartment);

        return DepartmentResource::make($newDepartment);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $department_code)
    {
        $department = Department::firstWhere('department_code', $department_code);
        if (!$department)
            return response([
                'message' => 'Department does not exist'
            ], 404);
        return DepartmentResource::make($department);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $department_code)
    {
        $department = Department::firstWhere('department_code', $department_code);

        if (!$department) {
            return response([
                'message' => "Department Code not found"
            ], 404);
        }

        $department->department_code = $request->input('department_code');
        $department->department_name = $request->input('department_name');
        $department->update();
        return DepartmentResource::make($department);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $department_code)
    {
        $department = Department::firstWhere('department_code', $department_code);
        if (!$department) {
            return response([
                "message" => "Department Code not found"
            ], 404);
        }
        $department->delete();

        return response()->noContent();
    }
}
