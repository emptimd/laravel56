@push('styles')
<link rel="stylesheet" type="text/css" href="{{ asset('la-assets/plugins/datatables/datatables.min.css') }}"/>

<style>
    span.statistic {
        height: 18px;
        background: #D9534F;
        display: block;
        position: relative;
        cursor: help;
    }

    span.statistic span {
        height: 18px;
        background: #5CB85C;
        display: block;
    }

    span.statistic i {
        color: #FFF;
        position: absolute;
        top: 0;
        right: 5px;
        font-weight: bold;
    }
</style>
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