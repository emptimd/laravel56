@extends('la.layouts.app')


@section("contentheader_title")
    <a href="{!! url('admin/aes') !!}">Aes</a> :
@endsection
@section("contentheader_description", $contact->id)
@section("section", "Aes")
@section("section_url", url('admin/aes'))
@section("sub_section", "Show")

@section("htmlheader_title", "Show Ae : ".$contact->id)

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
                            @include('admin.contacts.show_fields')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


