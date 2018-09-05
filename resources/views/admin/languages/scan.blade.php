@extends("la.layouts.app")

@section("contentheader_title", "Scan")
@section("contentheader_description", "Scanning project")
@section("section", "Languages")
@section("section_url", url('admin/languages'))
@section("sub_section", "Scan")
@section("htmlheader_title", "Scanning project")

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body">
            @if($languageElements)
                <div id="w2-info" class="alert-info alert fade in">
                    {{ count($languageElements) }} new entries were added!
                </div>
                <div id="added-source" class="grid-view">
                    <div class="summary">Total <b>{{ count($languageElements) }}</b> item.</div>
                    <table class="table table-striped table-bordered">
                        <thead>
                        <tr><th>#</th><th>Category</th><th>Message</th></tr>
                        </thead>
                        <tbody>
                        <?php $i=1?>
                        @foreach($languageElements as $item)
                            <tr data-key="0"><td>{{ $i++ }}</td><td>{{ $item[0] }}</td><td>{{ $item[1] }}</td></tr>
                        @endforeach

                        </tbody>
                    </table>
                </div>
            @else
                <div id="w2-info" class="alert-info alert fade in">
                    No new entries were added!
                </div>
            @endif
            
            
            
            {{--OLD ITEMS--}}
            @if(count($rLanguageElements) == 1)
                <div id="w2-danger" class="alert-danger alert fade in">
                    1 entrie to remove!</div>
            @endif

            @if(count($rLanguageElements) > 1)
                <div id="w2-danger" class="alert-danger alert fade in">
                    {{ count($rLanguageElements) }} entries to remove!</div>
            @endif

            @if($rLanguageElements)
                <button type="button" id="select-all" class="btn btn-primary">Select all</button>

                <button type="button" id="delete-selected" class="btn btn-danger">Delete selected</button>

                <div id="delete-source" class="grid-view"><div class="summary">Total <b>{{ count($rLanguageElements) }}</b> items.</div>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr><th>#</th><th>Id</th><th>Category</th><th>Message</th></tr>
                        </thead>
                        <tbody>
                        <?php $i=0?>
                        @foreach($rLanguageElements as $item)
                            <tr data-key="{{ $i++ }}"><td><input type="checkbox" class="language-source-cb remove-checkbox" name="LanguageSource[]" value="{{ $item[0] }}"></td><td>{{ $item[0] }}</td><td>{{ $item[1] }}</td><td>{{ $item[2] }}</td></tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            @endif

        </div>
    </div>
@endsection


@push('scripts')
<script>
    $(function() {
        $('#select-all').on('click',function(){
        	var $this = $(this);
            if($this.hasClass('checked')) {
                $this.removeClass('checked');
                $('.remove-checkbox').prop('checked', false).parent().prop('aria-checked', false).removeClass('checked');
            }else {
                $this.addClass('checked');
                $('.remove-checkbox').prop('checked', true).parent().prop('aria-checked', true).addClass('checked');
            }



        });

        $('#delete-selected').on('click',function(){
        	var $this = $(this);
        	if(!confirm('Are you sure you want to delete this items?')) return;
            var ids = '';

            $.each( $('.remove-checkbox:checked'), function() {
                ids += $(this).val()+',';
            });

            $.ajax({
                type: 'POST',
                url: location.protocol+'//'+location.host+'/admin/languages/removeOld',
                data: { ids: ids }
            }).done(function( data ) {
                location.reload();
            });
        });
    });
</script>

@endpush
