<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Validator;
use View;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $silder_products = Product::select(['id','name_ro','name_ru','path_ro', 'until'])->where('until', '>=', Carbon::now()->format('Y-m-d'))->limit(2)->get();

        return view('frontend.index', ['silder_products' => $silder_products]);
    }

    public function contact(Request $request)
    {

        if($request->post()) {
            $validator = Validator::make($request->all(),Contact::$rules);
            if ($validator->fails())
                return view('frontend.contact')->withErrors($validator);

            Contact::create($request->all());
            return \Redirect::back()->withStatus('Mesaj trimis cu succes');
        }

        return view('frontend.contact', []);
    }

    public function category($id, Request $request)
    {
        $model = Category::find($id);
        $products = Product::where('category_id', $id)->get();

        return view('frontend.category', ['model' => $model, 'products' => $products]);
    }
}
