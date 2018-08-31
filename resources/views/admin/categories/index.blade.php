@extends("la.layouts.app")

@section("contentheader_title", "Categories")
@section("section", "Categories")
@section("sub_section", "Listing")
@section("htmlheader_title", "Categories Listing")


@section("headerElems")
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.categories.create') !!}">Add category</a>
@endsection

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.categories.table')
        </div>
    </div>
@endsection

