@extends("la.layouts.app")

@section("contentheader_title", "Stores")
@section("section", "Stores")
@section("sub_section", "Listing")
@section("htmlheader_title", "Stores Listing")

@section("headerElems")
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.stores.create') !!}">Add Store</a>
@endsection


@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.stores.table')
        </div>
    </div>
@endsection

