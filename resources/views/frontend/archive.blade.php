@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title'){{ trans('front.archive_title', [ 'title' => $model->getName() ]) }}@endsection
@section('desc'){{ trans('front.archive_desc', [ 'title' => $model->getName() ]) }}@endsection

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
                                                <div class="item_meta"><a>{{ $product->until->format('Y-m-d') }}</a></div>
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