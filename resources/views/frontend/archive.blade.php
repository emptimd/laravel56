@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title'){{ trans('front.archive_title', [ 'title' => $model->getName() ]) }}@endsection
@section('desc'){{ trans('front.archive_desc', [ 'title' => $model->getName() ]) }}@endsection

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
                <div class="col-md-9">
                    <h4 class="alert alert-danger text-left">{{ trans('frontend.atentie archieve') }} <a href="{{ route('store', ['id' => $model->slug]) }}">{{ $model->getName() }}</a></h4>

                    <div class="row">
                        @foreach($model->products as $product)
                            <div class="col-md-4">
                                <div class="feature_news_item">
                                    <div class="item">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <a href="{{ route('catalog.view', ['id' => $product->slug]) }}">
                                                    <img class="img-responsive" src="{{ url('storage/'.$product->getPath()) }}" alt="Chania" >
                                                </a>
                                            </div>
                                            <div class="item_title_date">
                                                <div class="news_item_title">
                                                    <h2><a href="{{ route('catalog.view', ['id' => $product->slug]) }}">{{ $product->getName() }}</a></h2>
                                                </div>
                                                <div class="item_meta"><a>{{ $product->until->format('d-m-Y') }}</a></div>
                                            </div><!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>

                                    </div><!--item-->
                                </div><!--feature_news_item-->
                            </div><!--col-md-4-->
                        @endforeach


                    </div><!--row-->
                </div>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection