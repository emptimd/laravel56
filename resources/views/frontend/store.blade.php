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

@section('title')
    Store
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
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
        // mapdata[0] = ["46.98727336682891, 28.85789932217449", "bd. Decebal 139", "/ro/shops/bd-decebal-139/", "/public/images/map_dot.png", "17", "9:00 - 23:00"];
        // mapdata[1] = ["47.01050387820037, 28.842287063598633", "str. Lev Tolstoi 24/1", "/ro/shops/lev-tolstoi-24-1/", "/public/images/map_dot.png", "3", "9:00 - 23:00"];
        // mapdata[2] = ["46.992486, 28.864949", "str. Zelinski 7", "/ro/shops/str-zelinski-7/", "/public/images/map_dot.png", "11", "9:00 - 23:00"];
        // mapdata[3] = ["47.04339181603517, 28.867808282375336", "str. Alecu Russo 15", "/ro/shops/str-alecu-russo-15/", "/public/images/map_dot.png", "8", "9:00 - 23:00"];
        // mapdata[4] = ["47.018776963638324, 28.829310536384583", "str. A. Sciusev 55", "/ro/shops/a-sciusev-55/", "/public/images/map_dot.png", "5", "9:00 - 22:00"];
        // mapdata[5] = ["46.996252, 28.833900", "str. Testemitanu 23", "/ro/shops/str-testemitanu-23/", "/public/images/map_dot.png", "12", "9:00 - 22:00"];
        // mapdata[6] = ["46.97900340784864, 28.86840172111988", "bd. Dacia 47/7", "/ro/shops/bd-dacia-47-7/", "/public/images/map_dot.png", "13", "8:00 - 23:00"];
        // mapdata[7] = ["47.042939, 28.794398", "Calea Iesilor 16/6", "/ro/shops/calea-iesilor-16-6/", "/public/images/map_dot.png", "14", "8:00 - 23:00"];
        // mapdata[8] = ["47.04962599571806, 28.891289681196213", "bd. Mircea cel Batrin 24/6", "/ro/shops/bd-mircea-cel-batrin-24-6/", "/public/images/map_dot.png", "10", "9:00 - 23:00"];
        // mapdata[9] = ["47.03747314901726, 28.8904769718647", "bd. Mircea cel Batrin 2", "/ro/shops/bd-mircea-cel-batrin-2/", "/public/images/map_dot.png", "9", "8:00 - 23:00"];
        // mapdata[10] = ["47.050062, 28.886521", "str. Igor Vieru 6/3", "/ro/shops/str-igor-vieru-6-3/", "/public/images/map_dot.png", "15", "8:00 - 23:00"];
        // mapdata[11] = ["47.025381527599954, 28.837019205093384", "str. A. Puskin 32", "/ro/shops/str-a-puskin-32/", "/public/images/map_dot.png", "6", "9:00 - 23:00"];
        // mapdata[12] = ["47.002975, 28.818186", "str. Dokuceaev 6", "/ro/shops/str-dokuceaev-6/", "/public/images/map_dot.png", "16", "9:00 - 23:00"];
        // mapdata[13] = ["46.990660030216, 28.850178122520447", "bd. Dacia 10", "/ro/shops/bd-dacia-10/", "/public/images/map_dot.png", "4", "9:00 - 23:00"];
        // mapdata[14] = ["47.02241944879723, 28.836209177970886", "bd. Stefan cel Mare si Sfint 132", "/ro/shops/bd-stefan-cel-mare-si-sfint-132/", "/public/images/map_dot.png", "7", "8:00 - 23:00"];
        // mapdata[15] = ["47.031017, 28.822516", "bd. Stefan cel Mare si Sfint 135", "/ro/shops/bd-stefan-cel-mare-si-sfint-135/", "/public/images/map_dot.png", "18", "8:00 - 22:00"];



        let mymap = L.map('mapid').setView([47.023450709696306, 28.834192156791687], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg'
        }).addTo(mymap);

        $.each( mapdata, function( i, val ) {
            console.log(val);
            let marker = L.marker([val[0], val[1]]).addTo(mymap);
            marker.bindPopup(val[2]);

        });
    </script>

@endpush
 {{----}}