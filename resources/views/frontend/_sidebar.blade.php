<div class="col-sm-3">

    <div class="tab sitebar">
        <ul class="nav nav-tabs">
            <li class="active"><a  href="#sidebar1" data-toggle="tab">{{ trans('sidebar.Recente') }}</a></li>
            <li><a href="#sidebar2" data-toggle="tab">{{ trans('sidebar.Expira') }}</a></li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane active" id="sidebar1">
                @foreach($recent_products as $item)
                    <div class="media">
                        <div class="" style="max-height: 220px;overflow: hidden;margin-bottom: 10px;">
                            <a href="{{ route('catalog.view', ['id' => $item->slug]) }}"><img class="media-object" src="{{ url('storage/'.$item->getPath()) }}" alt="Generic placeholder image" title="{{ $item->getName() }}" style="width: 100%;"></a>
                        </div><!--media-left-->
                        <div class="">
                            <h4 class="media-heading elippse_25"><a href="{{ route('catalog.view', ['id' => $item->slug]) }}">{{ $item->getName() }}</a></h4>
                            <div class="item_meta" style="font-size: 13px;"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $item->until->format('d-m-Y') }}</a></div>
                        </div><!--media-body-->
                    </div><!--media-->
                @endforeach
            </div><!--tab-pane-->

            <div class="tab-pane" id="sidebar2">
                @foreach($expire_products as $item)
                    <div class="media">
                        <div class="" style="max-height: 220px;overflow: hidden;margin-bottom: 10px;">
                            <a href="{{ route('catalog.view', ['id' => $item->slug]) }}"><img class="media-object" src="{{ url('storage/'.$item->getPath()) }}" alt="Generic placeholder image" title="{{ $item->getName() }}" style="width: 100%;"></a>
                        </div><!--media-left-->
                        <div class="">
                            <h4 class="media-heading elippse_25"><a href="{{ route('catalog.view', ['id' => $item->slug]) }}">{{ $item->getName() }}</a></h4>
                            <div class="item_meta" style="font-size: 13px;"><a>{{ trans('frontend.Valabil pînă la')  }} {{ $item->until->format('d-m-Y') }}</a></div>
                        </div><!--media-body-->
                    </div><!--media-->
                @endforeach

            </div><!--tab-pane-->
        </div><!--tab-content-->
    </div><!--tab-->

    <div class="panel" style="overflow: hidden;padding-top: 10px;">
        <div class="mcwidget-embed" data-widget-id="3227087"></div>
    </div>

    @if(!request()->routeIs('catalog.view'))
    <div class="subscribe panel" style="padding: 10px 0;text-align: center;">
        <form action="{{ route('subscribe') }}" class="subscribe_form" method="post">
            {{ csrf_field() }}
            <div class="form-group {{ $errors->has('email') ? 'has-error' : ''}}">
                <span style="color:#000;">{{ trans('general.Abonează-te la reduceri!') }}</span>
                <br>
                <input type="text" name="email" id="subscribe_email" placeholder="E-mail" minlength="3" max="255" style="max-width: 100%;">
                <button class="btn btn-success btn-sm" style="padding: 5px;">{{ trans('general.Submit') }}</button>

                {!! $errors->first('email', '<p class="help-block">:message</p>') !!}
            </div>
        </form>

        @if (session('status'))
            <div class="alert alert-success" style="padding: 5px;">
                {{ session('status') }}
            </div>
        @endif
    </div>

    <div class="store_logo_sidebar panel col-sm-12">
        @foreach($store_logos as $logo)
            <div class="logo_wrapper col-sm-4 col-xs-4">
                <a href="{{ route('store', ['id' => $logo->slug]) }}"><img src="{{ url('storage/'.$logo->logo) }}" alt="Image" title="{{ $logo->getName() }}" class="store_logo"></a>
            </div>
        @endforeach
        <div class="clearfix"></div>
    </div>
    @endif


</div>

<style>
    .store_logo_sidebar {
        padding: 10px 0;
    }
    .logo_wrapper {
        padding: 0 3px;
        min-height: 50px;
        margin-bottom: 10px;
    }

    .logo_wrapper > a {
        min-height: 50px;
        display: inline-block;
        position: relative;
        width: 100%;
    }

    .store_logo {
        max-height: 50px;
        max-width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        opacity: .5;
    }

    .store_logo:hover {
        opacity: 1;
        transition: .3s;
    }
</style>