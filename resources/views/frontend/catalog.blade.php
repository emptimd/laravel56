@extends('layouts.main')

@section('title'){{ trans('front.catalog_title', [ 'title' => $model->getName() ]) }}@endsection
@section('desc'){{ trans('front.catalog_desc', [ 'title' => $model->getName() ]) }}@endsection

@section('og')
    <meta property="og:title" content="{{ $model->getName() }}" />
    <meta property="og:description" content="{{ $model->getDescription() }}" />
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:image" content="{{ url('storage/'.$model->path_ro) }}" />
@endsection

@if($isMobile)
    @push('styles')
        <!-- Owl carousel -->
        <link href="/css/owl.carousel.min.css" rel="stylesheet">
        <link href="/css/owl.theme.default.min.css" rel="stylesheet">
        <style>
            .owl-carousel .owl-stage {
                display: flex;
            }
            .owl-carousel .owl-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                max-width: initial;
            }
        </style>
    @endpush
@endif

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="single_content_layout" style="padding: 0;">
                        <div class="item feature_news_item owl-theme">
                            @if($model->isExpired())
                                <h4 style="margin-bottom: 0;" class="alert alert-danger text-left">{{ trans('frontend.expired product single') }}
                                    <a href="{{ route('store', ['id' => $model->store->slug]) }}">{{ $model->store->getName() }}</a>
                                </h4>
                            @endif
                            <div id="catalog_title">
                                <div class="news_item_title">
                                    <h2 style="padding: 0;"><a>{{ $model->getName() }}</a></h2>
                                </div><!--news_item_title-->
                                <div class="item_meta" style="font-size: 15px;"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $model->until->format('d-m-Y') }}</a></div>

                                <hr>
                                <div class="catalog_description">
                                    {{ $model->getDescription() }}
                                </div>
                                <hr style="margin-bottom: 0;">
                            </div>
                                @if($model->productPhotos->count())
                                    @if(!$isMobile)
                                        <div id="box" style="/*width: 600px; */height: 600px;position: relative;">
                                            <div id="publication"
                                                 data-desktop-js="/js/desc_reader.js?1"
                                                 data-desktop-css="/css/desc_reader.css"
                                                 data-desktop-retina-css="/css/desc_reader.css"
                                                 data-tablet-js="/js/desc_reader.js"
                                                 data-tablet-css="/css/desc_reader.css"
                                                 data-tablet-retina-css="/css/desc_reader.css"
                                                 data-mobile-js="/js/desc_reader_mobile.js"
                                                 data-mobile-css="/css/desc_reader_mobile.css?3"
                                                 data-mobile-retina-css="/css/desc_reader_mobile.css?3">
                                            </div>
                                        </div>
                                    @else
                                        <div class="owl-carousel">
                                            @foreach($model->productPhotos as $photo)
                                                <img class="img-responsive" src="{{ url('storage/'.$photo->getPath()) }}" alt="Image">
                                            @endforeach
                                        </div>
                                    @endif
                                @endif

                            <div class="item_wrapper" style="padding: 0 20px 20px 20px;">
                                <div class="item_content col-xs-8">
                                    {{ $model->store->getDescription() }}
                                    <br>
                                    {{ trans('catalog.more_desc', ['title' => $model->store->getName()]) }} <a href="{{ route('store', ['id' => $model->store->slug]) }}">{{ $model->store->getName() }}</a>

                                </div><!--item_content-->
                                <div class="new_desc_catalog col-xs-4" style="position: absolute;right: 0;bottom: 0;margin: auto 0;top: 0;">
                                    <a href="{{ route('store', ['id' => $model->store->slug]) }}"><img src="{{ url('storage/'.$model->store->logo) }}" alt="Logo" style="border-radius: 8px;max-height: 50px;max-width: 100%;position: absolute;bottom: 0;top: 0;left: 0;margin: auto;right: 0;"></a>
                                </div>
                                <div class="clearfix"></div>
                            </div><!--item_wrapper-->
                        </div><!--feature_news_item-->

                    </div><!--single_content_layout-->
                </div>
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection

@push('scripts')
    <script src='/js/catalog.js'></script>
    @if(!$isMobile)
    <script>
        // CONFING
        (function() {
            let spreads = @json($spreads);
            let translations = @json($translations);
            var env = Reader.getBrowserEnv(navigator.userAgent);
            var el = document.getElementById('publication');
            var data = {
                "sizes":{"at2400":{"width":2028,"height":2839},"at2000":{"width":1690,"height":2366},"at1600":{"width":1352,"height":1893},"at1200":{"width":1014,"height":1420},"at1000":{"width":845,"height":1183},"at800":{"width":676,"height":946},"at600":{"width":507,"height":710},"at200":{"width":169,"height":237}},
                "sizing":{"mobile":"fit-content"},
                "config":{"canonicalUrl":location.href,"publicationTitle":document.title,"customerName":"METRO AG","relativeSize":0.8978443866658069,"locale":"{{ app()->getLocale() }}","websiteUrl":null,"privacyPolicyUrl":"","webshopCheckoutUrl":null,"description":null,"downloadPdfUrl":null,"feedbackReplyable":false,"disableSharing":true,"showPrintButton":false,"enableSearch":false,"passQueryParams":false,"enablePublitasBranding":false,"layout":"booklet","disableAnalytics":true,"transitionEffect":"flip","enableInStockInfo":false,"hotspotsVisibleOnHover":false,"currencySymbol":"€"},
                "spreads":[],
                "translations":{"page":"Pagină","spread_overview":{"label":"Prezentare generală pagină"}},
                "branding":{"bgColor":"#ffffff","bgImage":null,"logo":null,"ctaButtonBackgroundColor":"#2e4585","ctaButtonTextColor":"#f4f7f9","callToActionButtonText":"Inspiră-te din METRO Blog","tooltipColor":"#1853f8","ProductHotspotIcon":null,"ProductHotspotIcon2x":null,"ExternalLinkHotspotIcon":null,"ExternalLinkHotspotIcon2x":null,"PageReferenceHotspotIcon":null,"PageReferenceHotspotIcon2x":null,"VideoHotspotIcon":null,"VideoHotspotIcon2x":null},
                "analytics":{"customerGaToken":"","gaTags":["21-40"],"cookieConsentText":null}};
            data.spreads = spreads;
            data.translations = translations;
            Reader.Bootstrap.init(el, env, data);
        }());
    </script>

    @else
        <!-- Owl carousel -->
        <script src="/js/owl.carousel.min.js"></script>
    @endif

@endpush