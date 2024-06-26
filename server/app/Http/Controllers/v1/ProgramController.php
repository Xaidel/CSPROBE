<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProgramRequest;
use App\Http\Resources\ProgramResource;
use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProgramResource::collection(Program::all());
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(ProgramRequest $request)
    {
        $validProgram = $request->validated();

        $existingProgram = Program::firstWhere('program_description', $validProgram['program_description']);

        if ($existingProgram) {
            return ProgramResource::make($existingProgram);
        }

        $newProgram = Program::create($validProgram);

        return ProgramResource::make($newProgram);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $program_code)
    {
        $program = Program::firstWhere('program_code', $program_code);

        if (!$program) {
            return response([
                'message' => "Program not found"
            ], 404);
        }

        return ProgramResource::make($program);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $program_code)
    {
        $program = Program::firstWhere('program_code', $program_code);

        if (!$program) {
            return response([
                'message' => "Program Code not found"
            ], 404);
        }

        $program->program_code = $request->input('program_code');
        $program->program_description = $request->input('program_description');
        $program->update();

        return ProgramResource::make($program);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $program_code)
    {
        $program = Program::firstWhere('program_code', $program_code);
        $program->delete();
        return response()->noContent();
    }
}
