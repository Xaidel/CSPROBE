<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProgramOutcomeResource extends JsonResource
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
            'po_desc' => $this->po_desc,
            'seq_num' => $this->seq_num,
            'program' => new ProgramResource($this->whenLoaded('program')),
            'performance_indicators' => PerformanceIndicatorResource::collection($this->whenLoaded('performance_indicators'))
        ];
    }
}
