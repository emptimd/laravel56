<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Category;

class UpdateCategoryRequest extends FormRequest
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
        return [
            'name_ro' => 'required|max:255|unique:categories,name_ro,'.$this->categories,
            'name_ru' => 'required|max:255|unique:categories,name_ru,'.$this->categories,
            'slug' => 'required|regex:/^[0-9A-Za-z_-]+$/|unique:categories,slug,'.$this->categories,
        ];
    }
}
