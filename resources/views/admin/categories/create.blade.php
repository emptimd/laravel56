@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/categories') !!}">Categories</a> :
@endsection
@section("contentheader_description", 'Create Category')
@section("section", "Categories")
@section("section_url", url('admin/categories'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Category")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['route' => 'admin.categories.store']) !!}

                    @include('admin.categories.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

@endsection
