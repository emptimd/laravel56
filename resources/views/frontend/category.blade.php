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
@endif

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">

                    <div class="row">
                        @foreach($products as $product)
                            <div class="col-sm-4 col-xs-6">
                                <div class="feature_news_item" style="margin-bottom: 25px;">
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
                                                <div class="item_meta"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $product->until->format('Y-m-d') }}</a></div>
                                            </div><!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>

                                    </div><!--item-->
                                </div><!--feature_news_item-->
                            </div><!--col-sm-4 col-xs-6 -->

                        @endforeach


                    </div><!--row-->
                </div>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection