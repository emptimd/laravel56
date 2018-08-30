<!-- Name Ro Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_ro', 'Name Ro:') !!}
    {!! Form::text('name_ro', null, ['class' => 'form-control']) !!}
</div>

<!-- Description Ro Field -->
<div class="form-group col-sm-6">
    {!! Form::label('description_ro', 'Description Ro:') !!}
    {!! Form::text('description_ro', null, ['class' => 'form-control']) !!}
</div>

<!-- Path Ro Field -->
<div class="form-group col-sm-6">
    {!! Form::label('path_ro', 'File Ro:') !!}
    <div class="file-loading">
        <input id="file-1" type="file" name="path_ro" class="file" data-msg-placeholder="File Ro...">
        {{--<input id="file-1" type="file" name="file" multiple class="file" data-overwrite-initial="false" data-min-file-count="2">--}}
    </div>
</div>

<!-- Name Ru Field -->
<div class="form-group col-sm-6">
    {!! Form::label('name_ru', 'Name Ru:') !!}
    {!! Form::text('name_ru', null, ['class' => 'form-control']) !!}
</div>

<!-- Description Ru Field -->
<div class="form-group col-sm-6">
    {!! Form::label('description_ru', 'Description Ru:') !!}
    {!! Form::text('description_ru', null, ['class' => 'form-control']) !!}
</div>{{----}}

<!-- Path Ru Field -->
<div class="form-group col-sm-6">
    {!! Form::label('path_ru', 'File Ru:') !!}
    <div class="file-loading">
        <input id="file-2" type="file" name="path_ru" class="file" data-msg-placeholder="File RU...">
        {{--<input id="file-1" type="file" name="file" multiple class="file" data-overwrite-initial="false" data-min-file-count="2">--}}
    </div>
</div>

<?php
$date = isset($product) ? $product->until->format('Y-m-d') : null;

?>

<!-- Until Field -->
<div class="form-group col-sm-6">
    {!! Form::label('until', 'Until:') !!}
    {!! Form::date('until', $date, ['class' => 'form-control']) !!}
</div>

<!-- Category Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('category_id', 'Category:') !!}
    {{--<label class="checkbox-inline">--}}
        {{--{!! Form::hidden('category_id', false) !!}--}}
        {{--{!! Form::checkbox('category_id', '1', null) !!}--}}
    {{--</label>--}}
    {!! Form::select('category_id', $categories, null, ['class' => 'form-control']) !!}
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('store_id', 'Store:') !!}
    {{--{!! Form::number('store_id', null, ['class' => 'form-control']) !!}--}}
    {!! Form::select('store_id', $stores, null, ['class' => 'form-control']) !!}
</div>

<div class="clearfix"></div>
<hr>
<h3 style="text-align: center;">Product Photo</h3>

<!-- Photos Ro Field -->
<div class="form-group col-sm-12">
    {!! Form::label('path_ro', 'Photos Ro:') !!}
    <div class="file-loading">
        <input id="photo-1" type="file" name="photos_ro[]" class="file" multiple data-msg-placeholder="Photos Ro...">
        {{--<input id="file-1" type="file" name="file" multiple class="file" data-overwrite-initial="false" data-min-file-count="2">--}}
    </div>
</div>

<!-- Photos Ru Field -->
<div class="form-group col-sm-12">
    {!! Form::label('path_ru', 'Photos Ru:') !!}
    <div class="file-loading">
        <input id="photo-2" type="file" name="photos_ru[]" class="file" multiple data-msg-placeholder="Photos Ru...">
        {{--<input id="file-1" type="file" name="file" multiple class="file" data-overwrite-initial="false" data-min-file-count="2">--}}
    </div>
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.products.index') !!}" class="btn btn-default">Cancel</a>
</div>
