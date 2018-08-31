@push('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('la-assets/plugins/datatables/datatables.min.css') }}"/>
@endpush

{!! $dataTable->table(['width' => '100%']) !!}

@push('scripts')
    <script src="{{ asset('la-assets/plugins/datatables/datatables.min.js') }}"></script>
    {!! $dataTable->scripts() !!}

    <script>
        $(function () {
            $("#dataTableBuilder thead > tr").addClass('success');
        });
    </script>
@endpush