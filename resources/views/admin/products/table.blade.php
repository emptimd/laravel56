<table class="table table-responsive" id="products-table">
    <thead>
        <tr>
        <th>Name Ro</th>
        {{--<th>Path Ro</th>--}}
        <th>Name Ru</th>
        {{--<th>Path Ru</th>--}}
        <th>Category Id</th>
        <th>Store Id</th>
        {{--<th>Views</th>--}}
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($products as $product)
        <tr>
            <td>{!! $product->name_ro !!}</td>
{{--            <td>{!! $product->path_ro !!}</td>--}}
            <td>{!! $product->name_ru !!}</td>
            {{--<td>{!! $product->path_ru !!}</td>--}}
            <td>{!! $product->category_id !!}</td>
            <td>{!! $product->store_id !!}</td>
{{--            <td>{!! $product->views !!}</td>--}}
            <td>
                {!! Form::open(['route' => ['admin.products.destroy', $product->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('admin.products.show', [$product->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('admin.products.edit', [$product->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>