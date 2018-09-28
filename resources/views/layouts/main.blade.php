<?php
$categories = App\Models\Category::all();
$alternative = app()->getLocale() == 'ro'? 'ru' : 'ro';
?>

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <meta name="description" content="@yield('desc')" />

    <!-- Jetpack Open Graph Tags -->
    <meta property="og:type" content="website" />
    @yield('og')
    <meta property="og:site_name" content="Croco.md" />
    <meta property="og:image:width" content="262" />
    <meta property="og:image:height" content="250" />
    <meta property="og:locale" content="ro_RO" />

    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">

    <link href="{{ url('ro/'.substr(request()->path(), 2)) }}" rel="canonical">
    <link href="{{ url($alternative.substr(request()->path(), 2)) }}" rel="alternate" hreflang="{{ $alternative }}">
    <link href="{{ url('ro/'.substr(request()->path(), 2)) }}" rel="alternate" hreflang="x-default" />


    <!-- Goole Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,700|Roboto:400,500" rel="stylesheet">

    <link rel="stylesheet" href="{{ mix('css/vendor.css') }}">

    @stack('styles'){{----}}

    <!--Theme CSS -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
<div id="main-wrapper">
    <div id="fb-root"></div>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="header-section">
                <div class="row">
                    <div class="col-md-3">
                        <div class="logo">
                            {{--<a  href="/"><img class="img-responsive" src="/img/logo_ro.png" alt=""></a>--}}
                            <a  href="/"><img class="img-responsive" src="{{ '/img/logo_'.app()->getLocale().'.png' }}" alt=""></a>
                        </div><!--logo-->
                    </div><!--col-md-3-->

                    <div class="col-md-7">
                        <nav class="navbar main-menu navbar-inverse navbar-static-top" role="navigation">
                            <div class="container">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="offcanvas">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div id="navbar" class="collapse navbar-collapse sidebar-offcanvas">
                                    <ul class="nav navbar-nav" style="padding-top: 8px;">
                                        <li class="hidden"><a href="#page-top"></a></li>
                                        @foreach($categories as $category)
                                            <li><a class="page-scroll" href="{{ route('category', ['id' => $category->slug]) }}">{{ $category->getName() }}</a></li>
                                        @endforeach

                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <!-- .navbar -->
                    </div>

                    <div class="col-md-2 social_icon1-col">
                        <div class="social_icon1">
                            <a href="{{ url('ro'.substr(request()->path(), 2)) }}" class="flag {{ app()->getLocale() == 'ro' ? 'active': '' }}" hreflang="ro-RO" lang="ro-RO"><img src="/img/Moldova-icon.png" title="Română" alt="Română" width="28" height="28" style="padding: 0;"></a>
                            <a href="{{ url('ru'.substr(request()->path(), 2)) }}" class="flag {{ app()->getLocale() == 'ru' ? 'active': '' }}" hreflang="ru-RU" lang="ru-RU"><img src="/img/Russia-icon.png" title="Русский" alt="Русский" width="28" height="28" style="margin-right: 10px;padding: 0;"></a>
                            <a href="https://www.facebook.com/croco.md/" target="_blank"><img src="/img/Facebook.png" width="28" height="28" style="padding: 0;"></a>
                            <a href="https://ok.ru/group/59189076033591" target="_blank"><img src="/img/Odnoklassniki.png" width="28" height="28" style="padding: 0;"></a>
                            <!--Google +-->
                        </div> <!--social_icon1-->
                    </div><!--col-md-3-->
                </div> <!--row-->
            </div><!--header-section-->
        </div><!-- /.container -->
    </header>

    <!--main content goes here-->
    @yield('content')
    <footer class="footer_section section_wrapper section_wrapper" >
        <div class="footer_top_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="text_widget footer_widget">
                            <div class="footer_widget_title"><h2>{{ trans('front.Despre Noi') }}</h2></div>

                            <div class="footer_widget_content">{{ trans('front.Despre Noi TEXT') }}
                            </div>
                        </div><!--text_widget-->
                    </div><!--col-xs-3-->

                    <div class="col-sm-2">
                        <div class="footer_widget">
                            <div class="footer_widget_title"><h2>{{ trans('general.Linkuri Utile') }}</h2></div>
                            <div class="footer_menu_item ">
                                <ul class="nav navbar-nav ">
                                    <li><a href="{{ route('contact') }}">{{ trans('general.Contact Us') }}</a></li>
                                    <li><a href="{{ route('allStores') }}">{{ trans('general.All Stores') }}</a></li>
                                </ul>

                            </div><!--footer_menu_item-->
                        </div><!--footer_widget-->
                    </div><!--col-xs-6-->


                    <div class="fb_footer" style="float:left;text-align: center;margin-top: 16px;">
                        <div class="fb-page"
                             data-href="https://www.facebook.com/croco.md"
                             data-small-header="false" data-adapt-container-width="false"
                             data-width="300px"
                             data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/croco.md" class="fb-xfbml-parse-ignore"><a
                                        href="https://www.facebook.com/croco.md">CROCO.md - toate reducerile pe un
                                    site</a></blockquote>
                        </div>
                        <div class="clearfix"></div>
                    </div>

                        <div class="clearfix visible-xs"></div>
                        <div class="text_widget footer_widget" style="text-align: center;">
                            <div id="ok_group_widget" style="margin-left: 20px;"></div>
                        </div>
                </div><!--row-->
            </div><!--container-->
        </div><!--footer_top_section-->
        <a href="#" class="crunchify-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
    </footer>

</div> <!--main-wrapper-->

{{--fb--}}
<script async defer>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v3.1&appId=104560276983365&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
{{--odno--}}
<script async defer>
    !function (d, id, did, st) {
        var js = d.createElement("script");
        js.src = "https://connect.ok.ru/connect.js";
        js.onload = js.onreadystatechange = function () {
            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                if (!this.executed) {
                    this.executed = true;
                    setTimeout(function () {
                        OK.CONNECT.insertGroupWidget(id,did,st);
                    }, 0);
                }
            }};
        d.documentElement.appendChild(js);
    }(document,"ok_group_widget","59189076033591",'{"width":300,"height":183}');
</script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
{{--<script src="/js/jquery.min.js"></script>--}}
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
{{--<script>--}}
    {{----}}
{{--</script>--}}
{{--<script--}}
        {{--src="https://code.jquery.com/jquery-3.3.1.min.js"--}}
        {{--integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="--}}
        {{--crossorigin="anonymous"></script>--}}

<!-- Owl carousel -->
{{--<script src="/js/owl.carousel.js"></script>--}}
{{--<script src="/js/owl.carousel.min.js"></script>--}}


<script src="{{ mix('js/vendor.js') }}"></script>

@stack('scripts')

<!-- Theme Script File-->
<script src="{{ mix('js/app.js') }}"></script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125490937-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-125490937-1');
</script>

{{--@if(app()->getLocale() == 'ro')--}}
    {{--<script async src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9555a130fa10de"></script>--}}
{{--@endif--}}

<!-- ManyChat -->
<script src="//widget.manychat.com/361633277990906.js" async="async"></script>


</body>
</html>