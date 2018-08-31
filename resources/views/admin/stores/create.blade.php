@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/stores') !!}">Stores</a> :
@endsection
@section("contentheader_description", 'Create Store')
@section("section", "Stores")
@section("section_url", url('admin/stores'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Store")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['route' => 'admin.stores.store']) !!}

                    @include('admin.stores.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

@endsection
