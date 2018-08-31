<!-- Name Ro Field -->
<div class="form-group {{ $errors->has('name_ro') ? 'has-error' : ''}}">
    {!! Form::label('name_ro', 'Name Ro:') !!}
    {!! Form::text('name_ro', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Name Ru Field -->
<div class="form-group {{ $errors->has('name_ru') ? 'has-error' : ''}}">
    {!! Form::label('name_ru', 'Name Ru:') !!}
    {!! Form::text('name_ru', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name_ru', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ro Field -->
<div class="form-group {{ $errors->has('description_ro') ? 'has-error' : ''}}">
    {!! Form::label('description_ro', 'Description Ro:') !!}
    {!! Form::text('description_ro', null, ['class' => 'form-control']) !!}
    {!! $errors->first('description_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ru Field -->
<div class="form-group {{ $errors->has('description_ru') ? 'has-error' : ''}}">
    {!! Form::label('description_ru', 'Description Ru:') !!}
    {!! Form::text('description_ru', null, ['class' => 'form-control']) !!}
    {!! $errors->first('description_ru', '<p class="help-block">:message</p>') !!}
</div>

<!-- Logo Field -->
<div class="form-group {{ $errors->has('logo') ? 'has-error' : ''}}">
    {!! Form::label('logo', 'Logo:') !!}
    {!! Form::text('logo', null, ['class' => 'form-control']) !!}
    {!! $errors->first('logo', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.stores.index') !!}" class="btn btn-default">Cancel</a>
</div>
