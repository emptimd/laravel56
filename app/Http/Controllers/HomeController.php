<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSubscriberRequest;
use App\Models\Category;
use App\Models\Contact;
use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Validator;

class HomeController extends AppBaseController
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $silder_products = Product::select(['id','name_ro','name_ru','path_ro','path_ru', 'until', 'slug'])->activeDate()->where('is_slider', 1)->limit(3)->get();
        $best_products = Product::select(['id','name_ro','name_ru','path_ro','path_ru', 'until', 'slug'])->activeDate()->orderBy('views', 'desc')->limit(3)->get();    /*->where('until', '>=', Carbon::now()->format('Y-m-d'))*/


        $category_products = Category::from('categories as c')->selectRaw('c.id,c.name_ro,c.name_ru,c.slug,p.id as p_id, p.name_ro as p_name_ro, p.name_ru as p_name_ru, p.path_ro, p.path_ru, p.until, p.slug as p_slug')
            ->join('products as p', function($join)
            {
                $join->on('p.id', '=', \DB::raw('(
                    select id from products
                    where products.category_id = c.id
                    AND until >= CURDATE()
                    order by created_at desc limit 1
                    )')
                );
            })->orderBy('id', 'asc')->get();

        $stores = [];
        foreach($category_products as $category) {
            $id = $category->id;
            $stores[$category->id] = Store::whereHas('categories', function($query) use ($id) {
                $query->where('category_id', $id);
            })->has('product')->limit(4)->get();
        }

        return view('frontend.index', ['silder_products' => $silder_products, 'best_products' => $best_products, 'category_products' => $category_products, 'stores' => $stores]);

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

    public function category($slug, Request $request)
    {
        $model = Category::whereSlug($slug)->first();
        $products = Product::where('category_id', $model->id)->whereRaw('until >= CURDATE() ')->get();

        return view('frontend.category', ['model' => $model, 'products' => $products]);
    }

    public function store($slug, Request $request)
    {
        $model = Store::with(['products' => function($query){
            return $query->whereRaw('until >= CURDATE() ')->limit(4);
        }])
            ->whereSlug($slug)
            ->first();
//        $products = Product::where('category_id', $id)->get();

        return view('frontend.store', ['model' => $model]);
    }

    public function archive($slug, Request $request)
    {
        $model = Store::with(['products' => function($query){
            return $query->whereRaw('CURDATE() > until');
        }])
            ->where('slug', $slug)
            ->first();
//        $products = Product::where('category_id', $id)->get();

        return view('frontend.archive', ['model' => $model]);
    }

    public function allStores()
    {
        $model = Store::find(2);

        return view('frontend.allStores', ['model' => $model]);
    }

    public function subscribe(CreateSubscriberRequest $request)
    {

        $model = new \App\Models\Subscriber();
        $model->email = $request->email;
        $model->token = Str::random();
        $model->is_active = 1;
        $model->save();

        \Mail::to('emptimd@gmail.com')->send(new \App\Mail\NewProduct());

        return back()->with('status', trans('subscribe.success'));
    }

    public function unsubscribe($token)
    {


        return view('unsubscribe', []);
    }
}
