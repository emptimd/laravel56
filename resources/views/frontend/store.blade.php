@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossorigin=""/>
    <style>
        .shop_logo > img{
            border-radius: 8px;
        }
    </style>
@endpush

@section('title'){{ trans('front.store_title', [ 'title' => $model->getName() ]) }}@endsection
@section('desc'){{ trans('front.store_desc', [ 'title' => $model->getName() ]) }}@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            @if($model->products->count())

            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-8">
                            <h3 style="padding-left: 15px;">{{ trans('catalog.Cataloage active') }} {{ $model->getName() }}</h3>
                        </div>
                        <div class="col-sm-4">
                            <a class="shop_logo pull-right"><img src="{{ url('storage/'.$model->logo) }}" alt="Imagine magazin" style="max-height: 50px;"></a>
                        </div>

                        @foreach($model->products as $product)
                            <div class="col-sm-3">
                                <div class="feature_news_item">
                                    <div class="item">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <a href="{{ route('catalog.view', ['id' => $product->slug]) }}" title="{{ $product->getName() }}">
                                                    <img class="img-responsive" src="{{ url('storage/'.$product->getPath()) }}" alt="{{ $product->getName() }}" style="">
                                                </a>
                                            </div>
                                            <div class="item_title_date store_item_title">
                                                <div class="news_item_title">
                                                    <h2><a href="{{ route('catalog.view', ['id' => $product->slug]) }}">{{ $product->getName() }}</a></h2>
                                                </div>
                                                <div class="item_meta"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $product->until->format('Y-m-d') }}</a></div>
                                            </div><!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>

                                    </div><!--item-->
                                </div><!--feature_news_item-->
                            </div><!--col-md-4-->

                        @endforeach

                    </div><!--row-->
                </div>
            </div>
            @else
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-8">
                                <h3 style="padding-left: 15px;">{{ $model->getName() }}</h3>
                            </div>
                            <div class="col-xs-4">
                                <a class="shop_logo pull-right"><img src="{{ url('storage/'.$model->logo) }}" alt="Imagine magazin" style="max-height: 50px;"></a>
                            </div>
                        </div>
                    </div>
                </div>
            @endif


            <div class="row">
                <div class="category_layout" style="padding-bottom: 20px;margin-top: 30px;">

                    <div class="col-md-4">
                        <a href="{{ route('archive', ['id' => $model->slug]) }}" style="margin-left: 10px;"><i class="fa fa-folder" aria-hidden="true"></i> {{ trans('front.Arhiva_cataloage_de_oferte') }} {{ $model->getName() }}</a>
                        <hr>

                        {!! $model->getHtml() !!}
                    </div>
                    <div class="col-md-8" style="border-left: 1px solid #eee;">
                        <div id="mapid" style="height:415px;"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>
        </div>
    </section>
@endsection

@push('scripts')
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
            integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
            crossorigin=""></script>

    <script>
        {{--Map data, all coords--}}
        let mapdata = {!! $model->json_coords !!};


        let mymap = L.map('mapid').setView([47.023450709696306, 28.834192156791687], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg'
        }).addTo(mymap);

        $.each( mapdata, function( i, val ) {
            let marker = L.marker([val[0], val[1]]).addTo(mymap);
            marker.bindPopup(val[2]);

        });
    </script>

@endpush
 {{----}}