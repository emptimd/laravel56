@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/products') !!}">Products</a> :
@endsection
@section("contentheader_description", 'Create Product')
@section("section", "Products")
@section("section_url", url('admin/products'))
@section("sub_section", "Create")

@section("htmlheader_title", "Create Product")

@section("main-content")
    <div class="box">
        <div class="box-header">

        </div>
        <div class="box-body">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    {!! Form::open(['route' => 'admin.products.store']) !!}

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