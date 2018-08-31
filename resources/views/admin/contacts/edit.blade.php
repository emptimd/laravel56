@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/aes') !!}">Aes</a> :
@endsection
@section("contentheader_description", $contact->id)
@section("section", "Aes")
@section("section_url", url('admin/aes'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Ae : ".$contact->id)

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                   {!! Form::model($contact, ['route' => ['admin.contacts.update', $contact->id], 'method' => 'patch']) !!}

                        @include('admin.contacts.fields')

                   {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection