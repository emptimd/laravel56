@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/storeCategories') !!}">StoreCategories</a> :
@endsection
@section("contentheader_description", $storeCategory->id)
@section("section", "StoreCategories")
@section("section_url", url('admin/storeCategories'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Ae : ".$storeCategory->id)

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($storeCategory, ['route' => ['admin.storeCategories.update', $storeCategory->id], 'method' => 'patch']) !!}

                    @include('admin.store_categories.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection