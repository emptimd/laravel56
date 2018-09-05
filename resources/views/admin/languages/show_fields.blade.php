<!-- Language Id Field -->
<div class="form-group">
    {!! Form::label('language_id', 'Language Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->language_id !!}</div>
</div>

<!-- Language Field -->
<div class="form-group">
    {!! Form::label('language', 'Language:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->language !!}</div>
</div>

<!-- Country Field -->
<div class="form-group">
    {!! Form::label('country', 'Country:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->country !!}</div>
</div>

<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->name !!}</div>
</div>

<!-- Name Ascii Field -->
<div class="form-group">
    {!! Form::label('name_ascii', 'Name Ascii:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->name_ascii !!}</div>
</div>

<!-- Status Field -->
<div class="form-group">
    {!! Form::label('status', 'Status:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $language->status !!}</div>
</div>

