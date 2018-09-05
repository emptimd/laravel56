@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/stores') !!}">Store</a> :
@endsection
@section("contentheader_description", $store->id)
@section("section", "Store")
@section("section_url", url('admin/stores'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Store : ".$store->id)

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($store, ['route' => ['admin.stores.update', $store->id], 'method' => 'patch', 'files' => true]) !!}

                    @include('admin.stores.fields')

                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection

@push('styles')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
@endpush

@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/js/fileinput.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/themes/fa/theme.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" type="text/javascript"></script>

    <script type="text/javascript">
        let logo = {{ $store->logo ? 1 : 0 }};

        $("#file-1").fileinput({
            initialPreview: [ '{{ $store->logo ? asset('storage/'.$store->logo ): '' }}'],
            initialPreviewAsData: logo,
            initialPreviewShowDelete: false,
            // initialPreviewConfig: [
            //     { type: 'png' },
            // ],
            theme: 'fa',
            allowedFileExtensions: ['jpg', 'png', 'gif', 'pdf'],
            // overwriteInitial: false,
            maxFileSize:2000,
            maxFilesNum: 10,
            showUpload: false,
            showRemove: false,
            slugCallback: function (filename) {
                return filename.replace('(', '_').replace(']', '_');
            }
        });
    </script>
@endpush