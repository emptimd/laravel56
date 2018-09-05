@extends("la.layouts.app")

@section("contentheader_title")
    <a href="{!! url('admin/languages') !!}">Languages</a> :
@endsection
@section("contentheader_description", "Translate into ".$language->language_id)
@section("section", "Languages")
@section("section_url", url('admin/languages'))
@section("sub_section", "Translate")

@section("htmlheader_title", "Translate into ".$language->language_id)

@section('main-content')
    @include('flash::message')

    <div class="clearfix"></div>
    <div class="box box-success">
        <div class="box-body" id="translates">
            @include('admin.languages.table')
        </div>
    </div>
@endsection

{{--{{ dd($language_id) }}--}}
{{--{{ dd(App::getLocale()) }}--}}


<style>
    #translates textarea {
        height: 47px;
    }

    #alert-tooltip {
        width: 100px;
        height: 100px;
        padding: 25px;
        position: fixed;
        top: 48%;
        left: 48%;
        border-radius: 10px;
        font-size: 50px;
    }

    #alert-tooltip.green {
        background-color: #dff0d8;
        border: 1px solid #d6e9c6;
        color: #3c763d;
    }
</style>

@push('scripts')
<script>
    $(function(){
        var language = location.href.split('/');
        var lang = language[5];
        language[6] = 'save';
        $('#translates').on('mousedown', '.save-translation',function(event){
            var $this = $(this);
            var id = $this.data('id');
//            var translation = $this.parent('tr').find('textarea').val();
            var translation = $("textarea[data-id='"+id+"']").val();
            $.ajax({
                type: 'POST',
                url: language.join('/'),
                data: { id: id, language: lang, translation : translation}
            }).done(function( data ) {
                var $alert = $('#alert-tooltip');
                if(!$alert.length) {
                    $alert = $('<div>')
                        .attr({id: 'alert-tooltip'})
                        .addClass('green')
                        .append($('<span>')
                                .addClass('glyphicon')
                                .addClass(' glyphicon-ok'));
                    $('body').append($alert);
                }else {
                    $alert.show();
                }
                setTimeout(function() {
                    $alert.hide();
                }, 500)

            });
        });
    });
</script>

@endpush



