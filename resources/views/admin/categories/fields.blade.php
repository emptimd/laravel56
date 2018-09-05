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

<!-- Slug Field -->
<div class="form-group {{ $errors->has('slug') ? 'has-error' : ''}}">
    {!! Form::label('slug', 'Slug:') !!}
    {!! Form::text('slug', null, ['class' => 'form-control']) !!}
    {!! $errors->first('slug', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.categories.index') !!}" class="btn btn-default">Cancel</a>
</div>
