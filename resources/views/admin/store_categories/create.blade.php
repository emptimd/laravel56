@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/storeCategories') !!}">StoreCategories</a> :
@endsection
@section("contentheader_description", 'Create StoreCategory')
@section("section", "StoresCategory")
@section("section_url", url('admin/storeCategories'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Store")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['route' => 'admin.storeCategories.store']) !!}

                    @include('admin.store_categories.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

@endsection
