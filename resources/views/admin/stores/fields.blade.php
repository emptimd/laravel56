<!-- Name Ro Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_ro', 'Name Ro:') !!}
    {!! Form::text('name_ro', null, ['class' => 'form-control']) !!}
</div>

<!-- Name Ru Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_ru', 'Name Ru:') !!}
    {!! Form::text('name_ru', null, ['class' => 'form-control']) !!}
</div>

<!-- Description Ro Field -->
<div class="form-group col-sm-6">
    {!! Form::label('description_ro', 'Description Ro:') !!}
    {!! Form::text('description_ro', null, ['class' => 'form-control']) !!}
</div>

<!-- Description Ru Field -->
<div class="form-group col-sm-6">
    {!! Form::label('description_ru', 'Description Ru:') !!}
    {!! Form::text('description_ru', null, ['class' => 'form-control']) !!}
</div>

<!-- Logo Field -->
<div class="form-group col-sm-6">
    {!! Form::label('logo', 'Logo:') !!}
    {!! Form::text('logo', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.stores.index') !!}" class="btn btn-default">Cancel</a>
</div>
