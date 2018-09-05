@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossorigin=""/>
@endpush

@section('title')
    All Stores
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="category_layout" style="padding-bottom: 20px;margin-top: 30px;">

                    {{--<div class="col-md-4">--}}
                        {{--<a href="{{ route('archive', ['id' => $model->slug]) }}" style="margin-left: 10px;"><i class="fa fa-folder" aria-hidden="true"></i> {{ trans('front.Arhiva_cataloage_de_oferte') }} {{ $model->getName() }}</a>--}}
                        {{--<hr>--}}

                        {{--{!! $model->getHtml() !!}--}}
                    {{--</div>--}}
                    <div class="col-md-12">
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
        /*Custom icons*/
        let greenIcon = L.icon({
            iconUrl: '/img/leaf-green.png',
            shadowUrl: '/img/leaf-shadow.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        /*Filer by stores*//**/
        // Nr1
        let nr1 = L.layerGroup([
            L.marker([46.98727336682891, 28.85789932217449], {icon: greenIcon}).bindPopup('This is Littleton, CO.'),
            L.marker([47.01050387820037, 28.842287063598633]).bindPopup('test.'),
            L.marker([46.992486, 28.864949]).bindPopup('asda'),
            L.marker([47.04339181603517, 28.867808282375336]).bindPopup('hha'),
            L.marker([47.018776963638324, 28.829310536384583]).bindPopup('123')
        ]);

        //Nr2
        let nr2 = L.layerGroup([
            L.marker([46.996252, 28.833900]).bindPopup('adas is Littleton, CO.'),
            L.marker([47.042939, 28.794398]).bindPopup('asaa123da'),
            L.marker([47.04962599571806, 28.891289681196213]).bindPopup('hhnnba'),
            L.marker([47.03747314901726, 28.8904769718647]).bindPopup('15666')
        ]);

        let overlayMaps = {
            "Nr.1": nr1,
            "Nr.2": nr2,
        };

        let mymap = L.map('mapid').setView([47.023450709696306, 28.834192156791687], 12);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZW1wdGltZCIsImEiOiJjamxtYWk0enMxNjl5M3BxbjlnOWkxMHBxIn0.Ajw6zTOMcEtbh2cvU7r5fg',
            layers: [nr2]
        }).addTo(mymap);


        nr1.addTo(mymap);
        nr2.addTo(mymap);

        L.control.layers(null, overlayMaps).addTo(mymap);
    </script>

@endpush
