<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class UpdateProductRequest extends FormRequest
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
        $a = [
            'slug' => 'required|regex:/^[0-9A-Za-z_-]+$/|unique:products,slug,'.$this->products
        ];

        return array_merge($a, Product::$rules);
    }
}
