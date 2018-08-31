@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/categories') !!}">Categories</a> :
@endsection
@section("contentheader_description", $category->id)
@section("section", "Categories")
@section("section_url", url('admin/categories'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Category : ".$category->id)

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($category, ['route' => ['admin.categories.update', $category->id], 'method' => 'patch']) !!}

                    @include('admin.categories.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection