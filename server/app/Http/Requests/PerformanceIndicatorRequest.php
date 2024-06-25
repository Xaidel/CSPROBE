<?php

namespace App\Http\Requests;

use App\Services\GetUserRole;
use Illuminate\Foundation\Http\FormRequest;

class PerformanceIndicatorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return (bool) GetUserRole::isProgramHead($this->user());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'pi_desc' => 'required|string|max:1000',
            'po_id' => 'required|integer',
            'course_id' => 'required|integer'
        ];
    }
}
