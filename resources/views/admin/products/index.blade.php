@extends("la.layouts.app")

@section("contentheader_title", "Products")
{{--@section("contentheader_description", "Products listing")--}}
@section("section", "Products")
@section("sub_section", "Listing")
@section("htmlheader_title", "Products Listing")


@section("headerElems")
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.products.create') !!}">Add Product</a>
@endsection

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.products.table')
        </div>
    </div>
@endsection

