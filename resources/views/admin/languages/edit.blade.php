@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/languages') !!}">Languages</a> :
@endsection
@section("contentheader_description", $language->language_id)
@section("section", "Languages")
@section("section_url", url('admin/languages'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Language : ".$language->language_id)

@section("main-content")
    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($language, ['route' => ['admin.languages.update', $language->language_id], 'method' => 'patch', 'id' => 'main-form']) !!}

                    @include('admin.languages.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection


