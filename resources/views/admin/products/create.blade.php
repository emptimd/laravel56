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
                    {!! Form::open(['route' => 'admin.products.store','enctype' => 'multipart/form-data']) !!}
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
        $("#file-1, #file-2").fileinput({
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

        $("#photo-1, #photo-2").fileinput({
            theme: 'fa',
            allowedFileExtensions: ['jpg', 'png', 'gif', 'pdf'],
            // overwriteInitial: false,
            maxFileSize:2000,
            maxFilesNum: 10,
            showUpload: false,
            showRemove: true,
            slugCallback: function (filename) {
                return filename.replace('(', '_').replace(']', '_');
            }
        });
    </script>
@endpush