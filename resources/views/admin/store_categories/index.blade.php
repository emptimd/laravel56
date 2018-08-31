@extends("la.layouts.app")

@section("contentheader_title", "StoreCategories")
@section("section", "StoreCategories")
@section("sub_section", "Listing")
@section("htmlheader_title", "StoreCategories Listing")

@section("headerElems")
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.storeCategories.create') !!}">Add StoreCategory</a>
@endsection

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.store_categories.table')
        </div>
    </div>
@endsection

