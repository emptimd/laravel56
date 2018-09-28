<?php

namespace App\Http\Controllers;

use App\DataTables\ProductDataTable;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\ProductPhoto;
use App\Repositories\ProductRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class ProductController extends AppBaseController
{
    /** @var  ProductRepository */
    private $productRepository;

    public function __construct(ProductRepository $productRepo)
    {
        $this->productRepository = $productRepo;
    }

    /**
     * Display a listing of the Product.
     *
     * @param ProductDataTable $contactDataTable
     * @return Response
     */
    public function index(ProductDataTable $contactDataTable)
    {
        return $contactDataTable->render('admin.products.index');

    }

    /**
     * Show the form for creating a new Product.
     *
     * @return Response
     */
    public function create()
    {
        $categories = \DB::table('categories')->pluck('name_ro', 'id');
        $stores = \DB::table('stores')->pluck('name_ro', 'id');

        return view('admin.products.create', ['categories' => $categories, 'stores' => $stores]);
    }

    /**
     * Store a newly created Product in storage.
     *
     * @param CreateProductRequest $request
     *
     * @return Response
     */
    public function store(CreateProductRequest $request)
    {
//        dd(storage_path('5krhG2VMZYYxVzYsheUjtCherZel8LMA1zDvo0uy.jpeg'));
//        \Tinify\setKey(env('TINY_KEY'));
//        $sourceData = $request->file('path_ro');
//        dd($sourceData);
        $input = $request->all();

        if(isset($input['is_slider'])) {
            $input['is_slider'] = (bool) $input['is_slider'];
        }else {
            $input['is_slider'] = false;
        }

        if($request->file('path_ro')) {
            $path = $request->path_ro->store('');
            $input['path_ro'] = $path;
        }

        $product = $this->productRepository->create($input);

        if($request->file('photos_ro')) {
            foreach($request->file('photos_ro') as $photo) {
                $model = new ProductPhoto();
                $model->product_id = $product->id;
                $model->path_ro = $photo->store('');
                $model->save();
            }
        }

        Flash::success('Product saved successfully.');

        return redirect(route('admin.products.index'));
    }

    /**
     * Display the specified Product.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('admin.products.index'));
        }

        return view('admin.products.show')->with('product', $product);
    }

    /**
     * Show the form for editing the specified Product.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('admin.products.index'));
        }
        $categories = \DB::table('categories')->pluck('name_ro', 'id');
        $stores = \DB::table('stores')->pluck('name_ro', 'id');

        //photos ro
        $photos = \DB::table('product_photos')->where('product_id', $product->id)->whereNotNull('path_ro')->pluck('path_ro', 'id')->toArray();
        $photos_ro = $photos_ru = $preview_config_ro = $preview_config_ru = [];
        foreach($photos as $key => $item) {
            $photos_ro[]=asset('storage/'.$item );
            $preview_config_ro[] = ['url' => route('admin.products.removePhotos'), 'key' => $key];
        }

        $has_photos_ro = $photos ? 1 : 0;

        // photos ru
        $photos = \DB::table('product_photos')->where('product_id', $product->id)->whereNotNull('path_ru')->pluck('path_ru', 'id')->toArray();
        foreach($photos as $key => $item) {
            $photos_ru[]=asset('storage/'.$item );
            $preview_config_ru[] = ['url' => route('admin.products.removePhotos'), 'key' => $key];
        }
        $has_photos_ru = $photos ? 1 : 0;

        return view('admin.products.edit', [
            'product'=> $product, 'categories' => $categories, 'stores' => $stores, 'has_photos_ro' => $has_photos_ro, 'has_photos_ru' => $has_photos_ru, 'photos_ro' => json_encode($photos_ro), 'photos_ru' => json_encode($photos_ru),
            'preview_config_ro' => json_encode($preview_config_ro), 'preview_config_ru' => json_encode($preview_config_ru),
        ]);
    }

    /**
     * Update the specified Product in storage.
     *
     * @param  int              $id
     * @param UpdateProductRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateProductRequest $request)
    {
        $product = $this->productRepository->findWithoutFail($id);

        $input = $request->all();
        if(isset($input['is_slider'])) {
            $input['is_slider'] = (bool) $input['is_slider'];
        }else {
            $input['is_slider'] = false;
        }

//        if($request->file('path_ro')) {
//            $path = $request->path_ro->store('');
//            $input['path_ro'] = $path;
//        }
//
//        if($request->file('path_ru')) {
//            $path = $request->path_ru->store('');
//            $input['path_ru'] = $path;
//        }

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('admin.products.index'));
        }

        $product = $this->productRepository->update($input, $id);

        if($request->file('photos_ro')) {
            foreach($request->file('photos_ro') as $photo) {
                $model = new ProductPhoto();
                $model->product_id = $product->id;
                $model->path_ro = $photo->store('');
                $model->save();
            }
        }

        if($request->file('photos_ru')) {
            foreach($request->file('photos_ru') as $photo) {
                $model = new ProductPhoto();
                $model->product_id = $product->id;
                $model->path_ru = $photo->store('');
                $model->save();
            }
        }

        Flash::success('Product updated successfully.');

        return redirect(route('admin.products.index'));
    }

    /**
     * Remove the specified Product from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $product = $this->productRepository->findWithoutFail($id);

        if (empty($product)) {
            Flash::error('Product not found');

            return redirect(route('admin.products.index'));
        }

        $this->productRepository->delete($id);

        Flash::success('Product deleted successfully.');

        return redirect(route('admin.products.index'));
    }

    public function removePhotos(Request $request)
    {
        ProductPhoto::destroy($request->key);
        return 1;
    }
}
