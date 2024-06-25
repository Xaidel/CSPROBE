<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PEORequest;
use App\Http\Resources\PEOResource;
use App\Models\PEO;
use Illuminate\Http\Request;

class PEOController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PEOResource::collection(PEO::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PEORequest $request)
    {
        $validPEO = $request->validated();
        $existingPEO = PEO::firstWhere('peo_desc', $validPEO['peo_desc']);
        if ($existingPEO) {
            return PEOResource::make($existingPEO);
        }

        $newPEO = PEO::create($validPEO);
        return PEOResource::make($newPEO);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return PEOResource::make(PEO::find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $peo = PEO::find($id);
        $newPEODesc = $request->input('peo_desc');
        $newPEOID = $request->input('program_id');

        if (!$peo) {
            return response([
                'message' => "Program Educational Objective not found"
            ], 404);
        }

        $peo->peo_desc = $newPEODesc;
        $peo->program_id = $newPEOID;
        $peo->update();

        return PEOResource::make($peo);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $peo = PEO::find($id);
        $peo->delete();
        return response()->noContent();
    }
}
