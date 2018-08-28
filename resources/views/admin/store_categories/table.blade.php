<table class="table table-responsive" id="storeCategories-table">
    <thead>
        <tr>
            <th>Category Id</th>
        <th>Store Id</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($storeCategories as $storeCategory)
        <tr>
            <td>{!! $storeCategory->category_id !!}</td>
            <td>{!! $storeCategory->store_id !!}</td>
            <td>
                {!! Form::open(['route' => ['admin.storeCategories.destroy', $storeCategory->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('admin.storeCategories.show', [$storeCategory->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('admin.storeCategories.edit', [$storeCategory->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>