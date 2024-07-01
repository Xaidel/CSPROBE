<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProgramOutcomeRequest;
use App\Http\Resources\ProgramOutcomeResource;
use App\Models\ProgramOutcome;
use App\Models\Program;
use Illuminate\Http\Request;

class ProgramOutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProgramOutcomeResource::collection(ProgramOutcome::with(
            [
                'program',
                'performance_indicators' => [
                    'course',
                    'at'
                ],

            ]
        )->get());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ProgramOutcomeRequest $request)
    {
        $validProgramOutcome = $request->validated();
        $existingProgramOutcome = ProgramOutcome::firstWhere('po_desc', $validProgramOutcome['po_desc']);

        if ($existingProgramOutcome) {
            return ProgramOutcomeResource::make($existingProgramOutcome);
        }

        $newProgramOutcome = ProgramOutcome::create($validProgramOutcome);
        return ProgramOutcomeResource::make($newProgramOutcome);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $programOutcome = ProgramOutcome::find($id);

        if (!$programOutcome) {
            return response([
                'message' => 'Program Outcome not found',
            ]);
        }

        $programOutcome->load([
            'program',
            'performance_indicators' => [
                'course',
                'at'
            ],
        ]);
        return ProgramOutcomeResource::make($programOutcome);
    }

    public function showByProgramCode(string $programCode)
    {
        $program = Program::firstWhere('program_code', $programCode);
        $programOutcome = ProgramOutcome::where('program_id', $program->id)->get();
        return ProgramOutcomeResource::collection($programOutcome);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $programOutcome = ProgramOutcome::find($id);
        $newPoDesc = $request->input('po_desc');
        $newPOID = $request->input('program_id');
        $newSeqNum = $request->input('seq_num');

        if (!$programOutcome) {
            return response([
                'message' => "Program Outcome not found"
            ], 404);
        }

        $programOutcome->po_desc = $newPoDesc;
        $programOutcome->program_id = $newPOID;
        $programOutcome->seq_num = $newSeqNum;
        $programOutcome->update();

        return ProgramOutcomeResource::make($programOutcome);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $programOutcome = ProgramOutcome::find($id);
        $programOutcome->delete();
        return response()->noContent();
    }
}
