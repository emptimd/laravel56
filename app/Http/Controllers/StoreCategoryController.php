<?php

namespace App\Http\Controllers;

use App\DataTables\StoreCategoryDataTable;
use App\Http\Requests;
use App\Http\Requests\CreateStoreCategoryRequest;
use App\Http\Requests\UpdateStoreCategoryRequest;
use App\Repositories\StoreCategoryRepository;
use Flash;
use App\Http\Controllers\AppBaseController;
use Response;

class StoreCategoryController extends AppBaseController
{
    /** @var  StoreCategoryRepository */
    private $storeCategoryRepository;

    public function __construct(StoreCategoryRepository $storeCategoryRepo)
    {
        $this->storeCategoryRepository = $storeCategoryRepo;
    }

    /**
     * Display a listing of the StoreCategory.
     *
     * @param StoreCategoryDataTable $storeCategoryDataTable
     * @return Response
     */
    public function index(StoreCategoryDataTable $storeCategoryDataTable)
    {
        return $storeCategoryDataTable->render('admin.store_categories.index');
    }

    /**
     * Show the form for creating a new StoreCategory.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.store_categories.create');
    }

    /**
     * Store a newly created StoreCategory in storage.
     *
     * @param CreateStoreCategoryRequest $request
     *
     * @return Response
     */
    public function store(CreateStoreCategoryRequest $request)
    {
        $input = $request->all();

        $storeCategory = $this->storeCategoryRepository->create($input);

        Flash::success('Store Category saved successfully.');

        return redirect(route('admin.storeCategories.index'));
    }

    /**
     * Display the specified StoreCategory.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $storeCategory = $this->storeCategoryRepository->findWithoutFail($id);

        if (empty($storeCategory)) {
            Flash::error('Store Category not found');

            return redirect(route('admin.storeCategories.index'));
        }

        return view('admin.store_categories.show')->with('storeCategory', $storeCategory);
    }

    /**
     * Show the form for editing the specified StoreCategory.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $storeCategory = $this->storeCategoryRepository->findWithoutFail($id);

        if (empty($storeCategory)) {
            Flash::error('Store Category not found');

            return redirect(route('admin.storeCategories.index'));
        }

        return view('admin.store_categories.edit')->with('storeCategory', $storeCategory);
    }

    /**
     * Update the specified StoreCategory in storage.
     *
     * @param  int              $id
     * @param UpdateStoreCategoryRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateStoreCategoryRequest $request)
    {
        $storeCategory = $this->storeCategoryRepository->findWithoutFail($id);

        if (empty($storeCategory)) {
            Flash::error('Store Category not found');

            return redirect(route('admin.storeCategories.index'));
        }

        $storeCategory = $this->storeCategoryRepository->update($request->all(), $id);

        Flash::success('Store Category updated successfully.');

        return redirect(route('admin.storeCategories.index'));
    }

    /**
     * Remove the specified StoreCategory from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $storeCategory = $this->storeCategoryRepository->findWithoutFail($id);

        if (empty($storeCategory)) {
            Flash::error('Store Category not found');

            return redirect(route('admin.storeCategories.index'));
        }

        $this->storeCategoryRepository->delete($id);

        Flash::success('Store Category deleted successfully.');

        return redirect(route('admin.storeCategories.index'));
    }
}
