<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PerformanceIndicatorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'pi_desc' => $this->pi_desc,
            'program_outcome' => new ProgramOutcomeResource($this->whenLoaded('po')),
            'summative_course' => new CourseResource($this->whenLoaded('course')),
            'assessment_tool' => new AssessmentToolResource($this->whenLoaded('at'))
        ];
    }
}
