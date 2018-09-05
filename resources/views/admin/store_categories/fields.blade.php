<!-- Store Id Field -->
<div class="form-group  {{ $errors->has('store_id') ? 'has-error' : ''}}">
    {!! Form::label('store_id', 'Store:') !!}
    {!! Form::select('store_id', $stores, null, ['class' => 'form-control']) !!}
    {!! $errors->first('store_id', '<p class="help-block">:message</p>') !!}
</div>

<!-- Category Id Field -->
<div class="form-group  {{ $errors->has('category_id') ? 'has-error' : ''}}">
    {!! Form::label('category_id', 'Category:') !!}
    {!! Form::select('category_id', $categories, null, ['class' => 'form-control']) !!}
    {!! $errors->first('category_id', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.storeCategories.index') !!}" class="btn btn-default">Cancel</a>
</div>
