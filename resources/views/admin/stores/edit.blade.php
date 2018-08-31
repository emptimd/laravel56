@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/stores') !!}">Store</a> :
@endsection
@section("contentheader_description", $store->id)
@section("section", "Store")
@section("section_url", url('admin/stores'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Store : ".$store->id)

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($store, ['route' => ['admin.stores.update', $store->id], 'method' => 'patch']) !!}

                    @include('admin.stores.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection