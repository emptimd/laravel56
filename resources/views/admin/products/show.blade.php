@extends('la.layouts.app')


@section("contentheader_title")
    <a href="{!! url('admin/products') !!}">Products</a> :
@endsection
@section("contentheader_description", $product->id)
@section("section", "Products")
@section("section_url", url('admin/products'))
@section("sub_section", "Show")

@section("htmlheader_title", "Show Product : ".$product->id)

@section('main-content')

    <div id="page-content" class="profile2">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active fade in" id="tab-info">
                <div class="tab-content">
                    <div class="panel infolist">
                        <div class="panel-default panel-heading">
                            <h4>General Info</h4>
                        </div>
                        <div class="panel-body">
                            @include('admin.products.show_fields')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


