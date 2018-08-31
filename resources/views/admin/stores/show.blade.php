@extends('la.layouts.app')


@section("contentheader_title")
    <a href="{!! url('admin/stores') !!}">Stores</a> :
@endsection
@section("contentheader_description", $store->id)
@section("section", "Stores")
@section("section_url", url('admin/stores'))
@section("sub_section", "Show")

@section("htmlheader_title", "Show Store : ".$store->id)

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
                            @include('admin.stores.show_fields')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


