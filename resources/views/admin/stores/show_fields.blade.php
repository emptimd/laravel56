<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->id !!}</div>
</div>

<!-- Name Ro Field -->
<div class="form-group">
    {!! Form::label('name_ro', 'Name Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->name_ro !!}</div>
</div>

<!-- Name Ru Field -->
<div class="form-group">
    {!! Form::label('name_ru', 'Name Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->name_ru !!}</div>
</div>

<!-- Description Ro Field -->
<div class="form-group">
    {!! Form::label('description_ro', 'Description Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->description_ro !!}</div>
</div>

<!-- Description Ru Field -->
<div class="form-group">
    {!! Form::label('description_ru', 'Description Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->description_ru !!}</div>
</div>

<!-- Slug Field -->
<div class="form-group">
    {!! Form::label('slug', 'Slug:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $store->slug !!}</div>
</div>

<!-- Logo Field -->
<div class="form-group">
    {!! Form::label('logo', 'Logo:', ['class' =>'col-md-2']) !!}
    <div class="uploaded_image"><img src="{{ url('storage/'.$store->logo) }}" alt=""></div>

</div>

