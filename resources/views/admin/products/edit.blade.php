@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/products') !!}">Products</a> :
@endsection
@section("contentheader_description", $product->id)
@section("section", "Products")
@section("section_url", url('admin/products'))
@section("sub_section", "Edit")

@section("htmlheader_title", "Edit Product : ".$product->id)

@section("main-content")
    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::model($product, ['route' => ['admin.products.update', $product->id], 'method' => 'patch']) !!}

                    @include('admin.products.fields')

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
        let path_ro = {{ $product->path_ro ? true : false }};
        let path_ru = {{ $product->path_ru ? 1 : 0 }};

        $("#file-1").fileinput({
            initialPreview: [ '{{ asset('storage/'.$product->path_ro ) }}'],
            initialPreviewAsData: path_ro,
            initialPreviewShowDelete: false,

            // initialPreviewConfig: [
            //     { type: 'png' },
            // ],
            theme: 'fa',
            // uploadUrl: "/image-view",
            // uploadExtraData: function() {
            //     return {
            //         _token: $("input[name='_token']").val(),
            //     };
            // },
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

        let asset_path_ru = "{{ $product->path_ru ? asset('storage/'.$product->path_ru ) : '' }}";
        $("#file-2").fileinput({
            initialPreview: [ asset_path_ru ],
            initialPreviewAsData: path_ru,
            initialPreviewShowDelete: false,
            // initialPreviewConfig: [
            //     { type: 'png' },
            // ],
            theme: 'fa',
            // uploadUrl: "/image-view",
            // uploadExtraData: function() {
            //     return {
            //         _token: $("input[name='_token']").val(),
            //     };
            // },
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

        $("#photo-1").fileinput({
            initialPreview: {!! $photos_ro !!},
            initialPreviewAsData: {{ $has_photos_ro }},
            initialPreviewShowDelete: true,
            initialPreviewConfig: {!! $preview_config_ro !!},
            // initialPreviewConfig: [
            //     { type: 'png' },
            // ],
            theme: 'fa',
            // uploadUrl: "/image-view",
            // uploadExtraData: function() {
            //     return {
            //         _token: $("input[name='_token']").val(),
            //     };
            // },
            allowedFileExtensions: ['jpg', 'png', 'gif', 'pdf'],
            overwriteInitial: false,
            maxFileSize:2000,
            maxFilesNum: 10,
            showUpload: false,
            showRemove: false,
            slugCallback: function (filename) {
                return filename.replace('(', '_').replace(']', '_');
            }
        });

        $("#photo-2").fileinput({
            initialPreview: {!! $photos_ru !!},
            initialPreviewAsData: {{ $has_photos_ru }},
            initialPreviewShowDelete: true,
            initialPreviewConfig: {!! $preview_config_ru !!},
            // initialPreviewConfig: [
            //     { type: 'png' },
            // ],
            theme: 'fa',
            // uploadUrl: "/image-view",
            // uploadExtraData: function() {
            //     return {
            //         _token: $("input[name='_token']").val(),
            //     };
            // },
            allowedFileExtensions: ['jpg', 'png', 'gif', 'pdf'],
            overwriteInitial: false,
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