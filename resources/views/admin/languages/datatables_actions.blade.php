{!! Form::open(['route' => ['admin.languages.destroy', $language_id], 'method' => 'delete']) !!}
<div class='btn-group'>
    <a href="{{ route('admin.languages.show', $language_id) }}" class='btn btn-default btn-xs'>
        <i class="glyphicon glyphicon-eye-open"></i>
    </a>
    <a href="{{ route('admin.languages.edit', $language_id) }}" class='btn btn-default btn-xs'>
        <i class="glyphicon glyphicon-edit"></i>
    </a>
    <a href="{{ route('admin.languages.translate', $language_id) }}" class='btn btn-default btn-xs'>
        <i class="glyphicon glyphicon-list-alt"></i>
    </a>
    {!! Form::button('<i class="glyphicon glyphicon-trash"></i>', [
        'type' => 'submit',
        'class' => 'btn btn-danger btn-xs',
        'onclick' => "return confirm('Are you sure?')"
    ]) !!}
</div>
{!! Form::close() !!}
