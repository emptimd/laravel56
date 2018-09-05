<!-- Language ID Field -->
<div class="form-group {{ $errors->has('language_id') ? 'has-error' : ''}}">
    {!! Form::label('language_id', 'Language ID:') !!}
    {!! Form::text('language_id', null, ['class' => 'form-control']) !!}
    {!! $errors->first('language_id', '<p class="help-block">:message</p>') !!}
</div>

<!-- Language Field -->
<div class="form-group {{ $errors->has('language') ? 'has-error' : ''}}">
    {!! Form::label('language', 'Language:') !!}
    {!! Form::text('language', null, ['class' => 'form-control']) !!}
    {!! $errors->first('language', '<p class="help-block">:message</p>') !!}
</div>

<!-- Country Field -->
<div class="form-group {{ $errors->has('country') ? 'has-error' : ''}}">
    {!! Form::label('country', 'Country:') !!}
    {!! Form::text('country', null, ['class' => 'form-control']) !!}
    {!! $errors->first('country', '<p class="help-block">:message</p>') !!}
</div>

<!-- Name Field -->
<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
</div>

<!-- Name Ascii Field -->
<div class="form-group {{ $errors->has('name_ascii') ? 'has-error' : ''}}">
    {!! Form::label('name_ascii', 'Name Ascii:') !!}
    {!! Form::text('name_ascii', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name_ascii', '<p class="help-block">:message</p>') !!}
</div>

<!-- Status Field -->
<div class="form-group {{ $errors->has('status') ? 'has-error' : ''}}">
    {!! Form::label('status', 'Status:') !!}
    {!! Form::number('status', null, ['class' => 'form-control']) !!}
    {!! $errors->first('status', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group">
    {!! Form::submit('Save', ['class' => 'btn btn-success']) !!}
    <button class="btn btn-default pull-right"><a href="{!! url('admin/languages') !!}">Cancel</a></button>
</div>
