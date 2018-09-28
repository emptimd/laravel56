<!-- Name Ro Field -->
<div class="form-group  {{ $errors->has('name_ro') ? 'has-error' : ''}}">
    {!! Form::label('name_ro', 'Name Ro:') !!}
    {!! Form::text('name_ro', null, ['class' => 'form-control', 'maxlength' => 255]) !!}
    {!! $errors->first('name_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ro Field -->
<div class="form-group {{ $errors->has('description_ro') ? 'has-error' : ''}}">
    {!! Form::label('description_ro', 'Description Ro:') !!}
    {!! Form::text('description_ro', null, ['class' => 'form-control', 'maxlength' => 255]) !!}
    {!! $errors->first('description_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Path Ro Field -->
<div class="form-group  {{ $errors->has('path_ro') ? 'has-error' : ''}}">
    {!! Form::label('path_ro', 'File:') !!}
    <div class="file-loading">
        <input id="file-1" type="file" name="path_ro" class="file" data-msg-placeholder="File Ro...">
    </div>
    {!! $errors->first('path_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Name Ru Field -->
<div class="form-group  {{ $errors->has('name_ru') ? 'has-error' : ''}}">
    {!! Form::label('name_ru', 'Name Ru:') !!}
    {!! Form::text('name_ru', null, ['class' => 'form-control', 'maxlength' => 255]) !!}
    {!! $errors->first('name_ru', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ru Field -->
<div class="form-group  {{ $errors->has('description_ru') ? 'has-error' : ''}}">
    {!! Form::label('description_ru', 'Description Ru:') !!}
    {!! Form::text('description_ru', null, ['class' => 'form-control', 'maxlength' => 255]) !!}
    {!! $errors->first('description_ru', '<p class="help-block">:message</p>') !!}
</div>{{----}}

<!-- Path Ru Field -->
{{--<div class="form-group  {{ $errors->has('path_ru') ? 'has-error' : ''}}">--}}
    {{--{!! Form::label('path_ru', 'File Ru:') !!}--}}
    {{--<div class="file-loading">--}}
        {{--<input id="file-2" type="file" name="path_ru" class="file" data-msg-placeholder="File RU...">--}}
    {{--</div>--}}
    {{--{!! $errors->first('path_ru', '<p class="help-block">:message</p>') !!}--}}

{{--</div>--}}

<?php
$date = isset($product) ? $product->until->format('Y-m-d') : null;

?>

<!-- Until Field -->
<div class="form-group  {{ $errors->has('until') ? 'has-error' : ''}}">
    {!! Form::label('until', 'Until:') !!}
    {!! Form::date('until', $date, ['class' => 'form-control']) !!}
    {!! $errors->first('until', '<p class="help-block">:message</p>') !!}
</div>

<!-- Slug Field -->
<div class="form-group  {{ $errors->has('slug') ? 'has-error' : ''}}">
    {!! Form::label('slug', 'Slug:') !!}
    {!! Form::text('slug', null, ['class' => 'form-control']) !!}
    {!! $errors->first('slug', '<p class="help-block">:message</p>') !!}
</div>

<!-- Is Slider Field -->
<div class="form-group  {{ $errors->has('is_slider') ? 'has-error' : ''}}">
    {!! Form::label('is_slider', 'Is slider:') !!} &nbsp &nbsp
    {!! Form::checkbox('is_slider', null, null, ['class' => 'form-contro1l']) !!}
    {!! $errors->first('is_slider', '<p class="help-block">:message</p>') !!}
</div>


<!-- Category Id Field -->
<div class="form-group  {{ $errors->has('category_id') ? 'has-error' : ''}}">
    {!! Form::label('category_id', 'Category:') !!}
    {!! Form::select('category_id', $categories, null, ['class' => 'form-control']) !!}
    {!! $errors->first('category_id', '<p class="help-block">:message</p>') !!}
</div>

<!-- Store Id Field -->
<div class="form-group  {{ $errors->has('store_id') ? 'has-error' : ''}}">
    {!! Form::label('store_id', 'Store:') !!}
    {!! Form::select('store_id', $stores, null, ['class' => 'form-control']) !!}
    {!! $errors->first('store_id', '<p class="help-block">:message</p>') !!}
</div>

<div class="clearfix"></div>
<hr>
<h3 style="text-align: center;">Product Photo</h3>

<!-- Photos Ro Field -->
<div class="form-group">
    {!! Form::label('path_ro', 'Photos:') !!}
    <div class="file-loading">
        <input id="photo-1" type="file" name="photos_ro[]" class="file" multiple data-msg-placeholder="Photos...">
    </div>
</div>

<!-- Photos Ru Field -->
{{--<div class="form-group">--}}
    {{--{!! Form::label('path_ru', 'Photos Ru:') !!}--}}
    {{--<div class="file-loading">--}}
        {{--<input id="photo-2" type="file" name="photos_ru[]" class="file" multiple data-msg-placeholder="Photos Ru...">--}}
    {{--</div>--}}
{{--</div>--}}

<!-- Submit Field -->
<div class="form-group">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.products.index') !!}" class="btn btn-default">Cancel</a>
</div>
