@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title'){{ trans('front.home_title') }}@endsection
@section('desc'){{ trans('front.home_desc') }}@endsection

@section('og')
<meta property="og:title" content="{{ trans('front.home_title') }}" />
<meta property="og:description" content="Croco este un crocodil foarte activ și curios care caută și publică cele mai noi cataloage și broșuri de la supermarket-uri, magazine de electronice, bricolaj și farmacii din Moldova." />
<meta property="og:url" content="http://croco.md/ro" />
<meta property="og:image" content="{{ url('/img/sidebar.png') }}" />
@endsection

@section('content')

    <!-- Feature Carousel Section -->
    <section id="feature_news_section" class="feature_news_section section_wrapper">
        <div class="container" style="max-height: 329px;overflow: hidden;">
            <div class="row">
                <div class="col-sm-4">
                    <div class="feature_news_carousel">
                        <div id="featured-news-carousal" class="carousel slide" data-ride="carousel">
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                @foreach($silder_products as $product)
                                    <div class="item feature_news_item {{ $loop->first ? 'active' : '' }}">
                                        <div class="item_wrapper" style="max-height: 329px">
                                            <div class="item_img">
                                                <a href="{{ route('catalog.view', ['id' => $product->slug]) }}" title="{{ $product->getName() }}">
                                                    <img class="img-responsive" src="{{ url('storage/'.$product->getPath()) }}" alt="Image">
                                                </a>
                                            </div> <!--item_img-->  {{----}}
                                            <div class="item_title_date" style="top: 240px;">
                                                <div class="news_item_title">
                                                    <h2><a href="{{ route('catalog.view', ['id' => $product->slug]) }}">{{ $product->getName() }}</a></h2>
                                                </div>
                                                <div class="item_meta"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $product->until->format('d-m-Y') }}</a></div>
                                            </div> <!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>
                                    </div><!--feature_news_item-->
                                @endforeach

                                <!-- Left and right controls -->
                                <div class="control-wrapper">
                                    <a class="left carousel-control" href="#featured-news-carousal" role="button" data-slide="prev">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                    </a>
                                    <a class="right carousel-control" href="#featured-news-carousal" role="button" data-slide="next">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div><!--carousel-inner-->
                        </div><!--carousel-->
                    </div><!--feature_news_carousel-->
                </div><!--col-md-4-->

                <div class="col-sm-8">
                    <div class="feature_news_static">
                        <div class="row">
                            @foreach($best_products as $product)
                                <div class="col-sm-4">
                                    <div class="feature_news_item">
                                        <div class="item active">
                                            <div class="item_wrapper" style="max-height: 329px">
                                                <div class="item_img">{{----}}
                                                    <a href="{{ route('catalog.view', ['id' => $product->slug]) }}" title="{{ $product->getName() }}">
                                                        <img class="img-responsive" src="{{ url('storage/'.$product->getPath()) }}" alt="Image">
                                                    </a>
                                                </div> <!--item_img-->
                                                <div class="item_title_date">
                                                    <div class="news_item_title">
                                                        <h2><a href="{{ route('catalog.view', ['id' => $product->slug]) }}">{{ $product->getName() }}</a></h2>
                                                    </div>
                                                    <div class="item_meta"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $product->until->format('d-m-Y') }}</a></div>
                                                </div><!--item_title_date-->
                                            </div> <!--item_wrapper-->
                                            <div class="item_content"></div>

                                        </div><!--item-->
                                    </div><!--feature_news_item-->
                                </div>
                            @endforeach

                        </div><!--row-->
                    </div><!--feature_news_static-->
                </div><!--col-md-6-->
            </div><!--row-->
        </div><!--container-->
    </section><!--feature_news_section-->

    <!-- Feature Category Section & sidebar -->
    <section id="feature_category_section" class="feature_category_section section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    @foreach($category_products as $category_product)
                        <div class="category_layout">
                            <div class="item_caregory red"><h2><a href="{{ route('category', ['id' => $category_product->slug]) }}">{{ $category_product->getName() }}</a></h2></div>
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="item feature_news_item">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <a href="{{ route('catalog.view', ['id' => $category_product->p_slug]) }}">
                                                    <img class="img-responsive" src="{{ url('storage/'.$category_product->path_ro) }}" alt="Image">
                                                </a>
                                            </div><!--item_img-->
                                            <div class="item_title_date">
                                                <div class="news_item_title">
                                                        <h2><a href="{{ route('catalog.view', ['id' => $category_product->p_slug]) }}">{{ app()->getLocale() == 'ro' ? $category_product->p_name_ro : $category_product->p_name_ru }}</a></h2>
                                                </div><!--news_item_title-->
                                                <div class="item_meta"><a> {{ trans('frontend.Valabil pînă la')  }} {{ date('d-m-Y', strtotime($category_product->until)) }}</a></div>
                                            </div><!--item_title_date-->
                                        </div><!--item_wrapper-->{{----}}
                                        <div class="item_content"></div><!--item_content-->

                                    </div><!--feature_news_item-->
                                </div><!--col-sm-7-->

                                <div class="col-sm-7">
                                    <div class="media_wrapper">
                                        @foreach($stores[$category_product->id] as $store)

                                            <div class="media">
                                                <div class="media-left">
                                                    <a href="{{ route('catalog.view', ['id' => $store->product->slug]) }}" style="display: inline-block;height: 80px;"><img class="media-object" src="{{ url('storage/'.$store->logo) }}" alt="Store image"  style="max-width: 80px;max-height: 80px;border-radius: 8px;position: relative;top: 50%;transform: perspective(1px) translateY(-50%);"></a>
                                                </div><!--media-left-->
                                                <div class="media-body">
                                                    <h3 class="media-heading"><a href="{{ route('catalog.view', ['id' => $store->product->slug]) }}">{{ $store->product->getName() }}</a></h3>

                                                    <p class="elippse_text">{{ $store->product->getDescription() }}</p>

                                                </div><!--media-body-->
                                            </div><!--media-->

                                        @endforeach
                                        <a href="{{ route('category', ['id' => $category_product->slug]) }}" class="category_more">{{ trans('front.More') }}</a>
                                    </div><!--media_wrapper-->
                                </div><!--col-sm-5-->
                            </div><!--row-->
                        </div><!--category_layout-->
                    @endforeach

                </div><!--col-sm-9-->

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section><!--feature_category_section-->


@endsection('content')

@push('scripts')
    <script src="js/jquery.shave.min.js"></script>
    <script>
        $('.elippse_text').shave(50);
        $('.elippse_25 > a').shave(30);
    </script>
@endpush