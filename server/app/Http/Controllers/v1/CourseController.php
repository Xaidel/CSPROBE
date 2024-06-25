<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CourseResource::collection(Course::with('pis')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseRequest $request)
    {
        $validCourse = $request->validated();
        $existingCourse = Course::firstWhere('name', $validCourse['name']);

        if ($existingCourse) {
            return CourseResource::make($existingCourse);
        }

        $newCourse = Course::create($validCourse);
        return CourseResource::make($newCourse);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $course = Course::find($id);
        if (!$course)
            return response([
                'message' => 'Course does not exist',
            ], 404);
        $course->load('pis');
        return CourseResource::make($course);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CourseRequest $request, string $id)
    {
        $course = Course::find($id);

        if (!$course)
            return response([
                'message' => 'Course does not exist',
            ], 404);


        $course->name = $request->input('name');
        $course->unit = $request->input('unit');
        $course->unit = $request->input('hours');
        $course->update();
        return CourseResource::make($course);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::find($id);
        if (!$course)
            return response([
                'message' => 'Course does not exist'
            ], 404);
        $course->delete();
        return response()->noContent();
    }
}
