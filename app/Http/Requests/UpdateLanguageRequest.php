<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Language;
use Illuminate\Http\Request;

class UpdateLanguageRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return array_merge(Language::$rules,['language_id' => ['required', 'unique:language,language_id,'.$this->route('languages').',language_id', 'min:5', 'max:5', 'regex:/^([a-z]{2}[_-][A-Z]{2}|[a-z]{2})$/']]);
    }
}
