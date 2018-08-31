<!-- Category Id Field -->
<div class="form-group {{ $errors->has('category_id') ? 'has-error' : ''}}">
    {!! Form::label('category_id', 'Category Id:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('category_id', false) !!}
        {!! Form::checkbox('category_id', '1', null) !!}
        {!! $errors->first('category_id', '<p class="help-block">:message</p>') !!}
    </label>
</div>

<!-- Store Id Field -->
<div class="form-group {{ $errors->has('store_id') ? 'has-error' : ''}}">
    {!! Form::label('store_id', 'Store Id:') !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
    {!! $errors->first('store_id', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.storeCategories.index') !!}" class="btn btn-default">Cancel</a>
</div>
