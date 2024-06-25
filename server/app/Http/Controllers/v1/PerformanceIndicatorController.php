<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerformanceIndicatorRequest;
use App\Http\Resources\PerformanceIndicatorResource;
use App\Models\PerformanceIndicator;

class PerformanceIndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PerformanceIndicatorResource::collection(PerformanceIndicator::with(['po', 'course', 'at'])->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PerformanceIndicatorRequest $request)
    {
        $validPerformanceIndicator = $request->validated();
        $existingPerformanceIndicator = PerformanceIndicator::firstWhere('pi_desc', $validPerformanceIndicator['pi_desc']);
        if ($existingPerformanceIndicator) {
            return PerformanceIndicatorResource::make($existingPerformanceIndicator);
        }

        $newPerformanceIndicator = PerformanceIndicator::create($validPerformanceIndicator);
        return PerformanceIndicatorResource::make($newPerformanceIndicator);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $performanceIndicator = PerformanceIndicator::find($id);
        if (!$performanceIndicator) {
            return response([
                'message' => 'No Performance Indicator found'
            ], 404);
        }
        $performanceIndicator->load('po');
        return PerformanceIndicatorResource::make($performanceIndicator);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PerformanceIndicatorRequest $request, string $id)
    {
        $performanceIndicator = PerformanceIndicator::find($id);
        $newPIDesc = $request->input('pi_desc');
        $newPOID = $request->input('po_id');

        if (!$performanceIndicator) {
            return response([
                'message' => 'Performance Indicator not found'
            ]);
        }
        $performanceIndicator->pi_desc = $newPIDesc;
        $performanceIndicator->po_id = $newPOID;
        $performanceIndicator->update();

        return PerformanceIndicatorResource::make($performanceIndicator);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $performanceIndicator = PerformanceIndicator::find($id);
        $performanceIndicator->delete();
        return response()->noContent();
    }
}
