@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
    <!-- Owl carousel -->
    <link href="/css/owl.carousel.min.css" rel="stylesheet">
    <link href="/css/owl.theme.default.min.css" rel="stylesheet">
@endpush

@section('title'){{ trans('front.catalog_title', [ 'title' => $model->getName() ]) }}@endsection
@section('desc'){{ trans('front.catalog_desc', [ 'title' => $model->getName() ]) }}@endsection

@section('content')
    {{--<div id="fb-root"></div>--}}
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="single_content_layout">
                        <div class="item feature_news_item owl-theme">
                            @if($model->isExpired())
                                <h4 class="alert alert-danger text-left">{{ trans('frontend.expired product single') }}
                                    <a href="{{ route('store', ['id' => $model->store->slug]) }}">{{ $model->store->getName() }}</a>
                                </h4>
                            @endif
                                <div class="owl-carousel">
                                @foreach($model->productPhotos as $photo)
                                    <div class="item_img">
                                        <img class="img-responsive" src="{{ url('storage/'.$photo->getPath()) }}" alt="Image">
                                    </div><!--item_img-->
                                @endforeach
                            </div>


                            <div class="item_wrapper">
                                <div class="news_item_title">
                                    <h2><a>{{ $model->getName() }}</a></h2>
                                </div><!--news_item_title-->
                                <div class="item_meta" style="font-size: 15px;"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $model->until->format('Y-m-d') }}</a></div>

                                <hr>
                                <div class="catalog_description">
                                    {{ $model->getDescription() }}
                                </div>

                                <div class="single_social_icon1">
                                    {{--<a class="icons-sm fb-ic" href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>--}}
                                    <!--Twitter-->
                                    {{--<a class="icons-sm tw-ic" href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>--}}
                                    {{--<!--Google +-->--}}
                                    {{--<a class="icons-sm gplus-ic" href="#"><i class="fa fa-google-plus"></i><span>Google Plus</span></a>--}}
                                    {{--<!--Linkedin-->--}}
                                    {{--<a class="icons-sm li-ic" href="#"><i class="fa fa-linkedin"></i><span>Linkedin</span></a>--}}
                                    {{--<a class="icons-sm gplus-ic" href="#"><i class="fa fa-odnoklassniki"></i><span>Odnoklassniki</span></a>--}}

                                    <span id="ok_shareWidget" style="display: inline-block;position: relative;top: 5px;"></span>

                                    <div class="fb-share-button" data-layout="button_count" data-size="small" data-mobile-iframe="true" style="margin-top: -150px;">
                                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">{{ trans('share.Îmi place') }}</a>
                                    </div>

                                </div> <!--social_icon1-->

                                <div class="item_content">
                                    {{ $model->store->getDescription() }}

                                    <a href="{{ route('store', ['id' => $model->store->slug]) }}"><img src="{{ url('storage/'.$model->store->logo) }}" alt="Logo" width="50" height="50" style="border-radius: 8px;"></a>
                                </div><!--item_content-->

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
    <script>
        !function (d, id, did, st, title, description, image) {
            var js = d.createElement("script");
            js.src = "https://connect.ok.ru/connect.js";
            js.onload = js.onreadystatechange = function () {
                if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                    if (!this.executed) {
                        this.executed = true;
                        setTimeout(function () {
                            OK.CONNECT.insertShareWidget(id,did,st, title, description, image);
                        }, 0);
                    }
                }};
            d.documentElement.appendChild(js);
        }(document,"ok_shareWidget",document.URL,'{"sz":20,"st":"oval","ck":3,"lang":"{{ app()->getLocale() }}"}',"","","");
    </script>



    {{--fb--}}
    <script>
        let fb_lang = '{{ app()->getLocale() == 'ro' ? 'ro_RO' : 'ru_RU' }}';
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/'+fb_lang+'/sdk.js#xfbml=1&version=v3.1&appId=104560276983365&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

    <!-- Owl carousel -->
    <script src="/js/owl.carousel.min.js"></script>
@endpush