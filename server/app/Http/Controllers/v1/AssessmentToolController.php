<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssessmentToolRequest;
use App\Http\Resources\AssessmentToolResource;
use App\Models\AssessmentTool;
use Illuminate\Http\Request;

class AssessmentToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AssessmentToolResource::collection(AssessmentTool::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AssessmentToolRequest $request)
    {
        $validAssessmentTool = $request->validated();
        $existingAssessmentTool = AssessmentTool::firstWhere('tool', $validAssessmentTool['tool']);
        if ($existingAssessmentTool)
            return AssessmentToolResource::make($existingAssessmentTool);

        $newAssessmentTool = AssessmentTool::create($validAssessmentTool);
        return AssessmentToolResource::make($newAssessmentTool);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $assessmentTool = AssessmentTool::find($id);
        if (!$assessmentTool)
            return response([
                'message' => 'No Assessment Tool Found',
            ], 404);

        return AssessmentTool::make($assessmentTool);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AssessmentToolRequest $request, string $id)
    {
        $assessmentTool = AssessmentTool::find($id);
        $newTool = $request->input('tool');

        if (!$assessmentTool)
            return response([
                'message' => 'No Assessment Tool Found',
            ], 404);

        $assessmentTool->tool = $newTool;
        $assessmentTool->update();

        return AssessmentToolResource::make($assessmentTool);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $assessmentTool = AssessmentTool::find($id);
        $assessmentTool->delete();
        return response()->noContent();
    }
}
