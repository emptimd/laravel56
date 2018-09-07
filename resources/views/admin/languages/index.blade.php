@extends("la.layouts.app")

@section("contentheader_title", "Languages")
@section("contentheader_description", "Languages listing")
@section("section", "Languages")
@section("sub_section", "Listing")
@section("htmlheader_title", "Languages Listing")


@section("headerElems")
    <a class="btn btn-default btn-sm pull-right" href="{!! route('admin.languages.clearCache') !!}">Clear Cache</a>
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.languages.scan') !!}">Scan</a>
    <a class="btn btn-success btn-sm pull-right" href="{!! route('admin.languages.create') !!}">Add language</a>
@endsection

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.languages.table')
        </div>
    </div>
@endsection

