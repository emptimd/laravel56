<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CatalogController extends Controller
{


    public function view($id, Request $request)
    {

        $model = Product::find($id);

        return view('frontend.catalog', ['model' => $model]);
    }
}
