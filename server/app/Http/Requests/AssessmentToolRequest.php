<?php

namespace App\Http\Requests;

use App\Services\GetUserRole;
use Illuminate\Foundation\Http\FormRequest;

class AssessmentToolRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return GetUserRole::isProgramHead($this->user());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'tool' => 'required|string|max:100'
        ];
    }
}
