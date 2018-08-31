@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/aes') !!}">Aes</a> :
@endsection
@section("contentheader_description", 'Create Ae')
@section("section", "Aes")
@section("section_url", url('admin/aes'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Ae")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['route' => 'admin.contacts.store']) !!}

                        @include('admin.contacts.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>

@endsection
