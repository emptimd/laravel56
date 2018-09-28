<!-- Name Ro Field -->
<div class="form-group">
    {!! Form::label('name_ro', 'Name Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->name_ro !!}</div>
</div>

<!-- Description Ro Field -->
<div class="form-group">
    {!! Form::label('description_ro', 'Description Ro:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->description_ro !!}</div>
</div>

<!-- Path Ro Field -->
<div class="form-group">
    {!! Form::label('path_ro', 'File:', ['class' =>'col-md-2']) !!}
    <div class="uploaded_image"><img src="{{ url('storage/'.$product->path_ro) }}" alt=""></div>
</div>

<!-- Name Ru Field -->
<div class="form-group">
    {!! Form::label('name_ru', 'Name Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->name_ru !!}</div>
</div>

<!-- Description Ru Field -->
<div class="form-group">
    {!! Form::label('description_ru', 'Description Ru:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->description_ru !!}</div>
</div>

<!-- Path Ru Field -->
{{--<div class="form-group">--}}
    {{--{!! Form::label('path_ru', 'Path Ru:', ['class' =>'col-md-2']) !!}--}}
    {{--<div class="uploaded_image"><img src="{{ url('storage/'.$product->path_ru) }}" alt=""></div>--}}

{{--</div>--}}

<!-- Is slider Field -->
<div class="form-group">
    {!! Form::label('is_slider', 'Is slider:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->is_slider !!}</div>
</div>

<!-- Until Field -->
<div class="form-group">
    {!! Form::label('until', 'Until:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->until !!}</div>
</div>

<!-- Slug Field -->
<div class="form-group">
    {!! Form::label('slug', 'Slug:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->slug !!}</div>
</div>

<!-- Category Id Field -->
<div class="form-group">
    {!! Form::label('category_id', 'Category Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->category->name_ro !!}</div>
</div>

<!-- Store Id Field -->
<div class="form-group">
    {!! Form::label('store_id', 'Store Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->store->name_ro !!}</div>
</div>

<!-- Views Field -->
<div class="form-group">
    {!! Form::label('views', 'Views:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->views !!}</div>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->created_at !!}</div>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $product->updated_at !!}</div>
</div>

