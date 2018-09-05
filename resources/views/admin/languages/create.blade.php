@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/languages') !!}">Languages</a> :
@endsection
@section("contentheader_description", 'Create Language')
@section("section", "Languages")
@section("section_url", url('admin/languages'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Language")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['url' => 'admin/languages', 'id' => 'main-form']) !!}

                    @include('admin.languages.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection

