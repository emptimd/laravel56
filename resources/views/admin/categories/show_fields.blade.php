<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $category->id !!}</div>
</div>

<!-- Name Ro Field -->
<div class="form-group">
    {!! Form::label('name_ro', 'Name Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $category->name_ro !!}</div>
</div>

<!-- Name Ru Field -->
<div class="form-group">
    {!! Form::label('name_ru', 'Name Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $category->name_ru !!}</div>
</div>

<!-- Description Ro Field -->
<div class="form-group">
    {!! Form::label('description_ro', 'Description Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $category->description_ro !!}</div>
</div>

<!-- Description Ru Field -->
<div class="form-group">
    {!! Form::label('description_ru', 'Description Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $category->description_ru !!}</div>
</div>

