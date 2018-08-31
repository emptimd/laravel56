<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $storeCategory->id !!}</div>
</div>

<!-- Category Id Field -->
<div class="form-group">
    {!! Form::label('category_id', 'Category Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $storeCategory->category_id !!}</div>
</div>

<!-- Store Id Field -->
<div class="form-group">
    {!! Form::label('store_id', 'Store Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $storeCategory->store_id !!}</div>
</div>

