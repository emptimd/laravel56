<!-- Category Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('category_id', 'Category Id:') !!}
    <label class="checkbox-inline">
        {!! Form::hidden('category_id', false) !!}
        {!! Form::checkbox('category_id', '1', null) !!} 1
    </label>
</div>

<!-- Store Id Field -->
<div class="form-group col-sm-6">
    {!! Form::label('store_id', 'Store Id:') !!}
    {!! Form::number('store_id', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.storeCategories.index') !!}" class="btn btn-default">Cancel</a>
</div>
