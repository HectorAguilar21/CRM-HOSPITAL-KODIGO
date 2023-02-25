<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'user' => ['required', 'exists:users,user'],
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'user.required' => 'El Usuario es obliatorio',
            'user.user' => 'El Usuario no es valido',
            'user.exists' => 'Ese Usuario no existe',
            'password' => 'El password es obliatorio'
        ];
    }
}
