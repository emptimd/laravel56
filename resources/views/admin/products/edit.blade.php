@extends('layouts.app')

@push('css')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
@endpush

@section('content')
    <section class="content-header">
        <h1>
            Product
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($product, ['route' => ['admin.products.update', $product->id], 'method' => 'patch','enctype' => 'multipart/form-data']) !!}

                        @include('admin.products.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection

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