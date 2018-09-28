@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@if($model->id == 3)
    @section('title'){{ trans('front.category_title_3') }}@endsection
    @section('desc'){{ trans('front.category_desc_3') }}@endsection
@elseif($model->id == 4)
    @section('title'){{ trans('front.category_title_4') }}@endsection
    @section('desc'){{ trans('front.category_desc_4') }}@endsection
@elseif($model->id == 5)
    @section('title'){{ trans('front.category_title_5') }}@endsection
    @section('desc'){{ trans('front.category_desc_5') }}@endsection
@elseif($model->id == 6)
    @section('title'){{ trans('front.category_title_6') }}@endsection
    @section('desc'){{ trans('front.category_desc_6') }}@endsection
@elseif($model->id == 7)
    @section('title'){{ trans('front.category_title_7') }}@endsection
    @section('desc'){{ trans('front.category_desc_7') }}@endsection
@elseif($model->id == 8)
    @section('title'){{ trans('front.category_title_8') }}@endsection
    @section('desc'){{ trans('front.category_desc_8') }}@endsection
@endif

@section('og')
    <meta property="og:title" content="{{ trans('front.home_title') }}" />
    <meta property="og:description" content="Croco este un crocodil foarte activ și curios care caută și publică cele mai noi cataloage și broșuri de la supermarket-uri, magazine de electronice, bricolaj și farmacii din Moldova." />
    <meta property="og:url" content="http://croco.md/ro" />
    <meta property="og:image" content="{{ url('/img/sidebar.png') }}" />
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-9" style="position: relative;">
                    <div class="spin-wrap" style="position: absolute;left: 0;right: 0;top: 200px;margin:0 auto;width: 25px;height: 25px;z-index: 11;">
                        <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>

                    </div>
                    <div class="row">
                        <div class="grid" style="opacity: 0;">
                            <div class="grid-sizer col-sm-4 col-xs-6"></div>
                            @foreach($products as $product)
                                <div class="grid-item col-sm-4 col-xs-6">
                                    <div class="grid-item-content feature_news_item" style="margin-bottom: 25px;">
                                        <div class="item">
                                            <div class="item_wrapper">
                                                <div class="item_img">
                                                    <a href="{{ route('catalog.view', ['id' => $product->slug]) }}" title="{{ $product->getName() }}">
                                                        <img class="img-responsive" src="{{ url('storage/'.$product->getPath()) }}" alt="Image">
                                                    </a>
                                                </div>
                                                <div class="item_title_date">
                                                    <div class="news_item_title">{{----}}
                                                        <h2><a href="{{ route('catalog.view', ['id' => $product->slug]) }}">{{ $product->getName() }}</a></h2>
                                                    </div>
                                                    <div class="item_meta"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $product->until->format('d-m-Y') }}</a></div>
                                                </div><!--item_title_date-->
                                            </div> <!--item_wrapper-->
                                            <div class="item_content"></div>

                                        </div><!--item-->
                                    </div><!--feature_news_item-->
                                </div><!--col-sm-4 col-xs-6 -->

                            @endforeach
                        </div>
                    </div><!--row-->
                </div>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection

@push('scripts')
    <script src="/js/masonry.js"></script>
    <script>
        $(function() {
            setTimeout(function() {
                let $grid = $('.grid');
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });

                $grid.css('opacity', 1);
                $('.spin-wrap').hide();
            }, 700);

        });

    </script>
@endpush