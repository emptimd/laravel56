<table class="table table-responsive" id="stores-table">
    <thead>
        <tr>
            <th>Name Ro</th>
        <th>Name Ru</th>
        <th>Description Ro</th>
        <th>Description Ru</th>
        <th>Logo</th>
            <th colspan="3">Action</th>
        </tr>
    </thead>
    <tbody>
    @foreach($stores as $store)
        <tr>
            <td>{!! $store->name_ro !!}</td>
            <td>{!! $store->name_ru !!}</td>
            <td>{!! $store->description_ro !!}</td>
            <td>{!! $store->description_ru !!}</td>
            <td>{!! $store->logo !!}</td>
            <td>
                {!! Form::open(['route' => ['admin.stores.destroy', $store->id], 'method' => 'delete']) !!}
                <div class='btn-group'>
                    <a href="{!! route('admin.stores.show', [$store->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-eye-open"></i></a>
                    <a href="{!! route('admin.stores.edit', [$store->id]) !!}" class='btn btn-default btn-xs'><i class="glyphicon glyphicon-edit"></i></a>
                    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', ['type' => 'submit', 'class' => 'btn btn-danger btn-xs', 'onclick' => "return confirm('Are you sure?')"]) !!}
                </div>
                {!! Form::close() !!}
            </td>
        </tr>
    @endforeach
    </tbody>
</table>