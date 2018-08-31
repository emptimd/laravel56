@extends("la.layouts.app")

@section("contentheader_title", "Contacts")
@section("section", "Contacts")
@section("sub_section", "Listing")
@section("htmlheader_title", "Contacts Listing")


@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @include('admin.contacts.table')
        </div>
    </div>
@endsection

