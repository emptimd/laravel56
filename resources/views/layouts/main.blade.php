<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <!-- Goole Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oswald:400,700|Roboto:400,500" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <!-- Owl carousel -->
    <link href="/css/owl.carousel.css" rel="stylesheet">
    <link href="/css/owl.theme.default.min.css" rel="stylesheet">

    <!-- Off Canvas Menu -->
    <link href="/css/offcanvas.min.css" rel="stylesheet">

    <!--Theme CSS -->
    <link href="/css/style.css" rel="stylesheet">
</head>
<body>
<div id="main-wrapper">
    <!-- Header Section -->
    <header>
        <div class="container">

            <div class="header-section">
                <div class="row">
                    <div class="col-md-3">
                        <div class="logo">
                            <a  href="index.html"><img class="img-responsive" src="/img/logo.png" alt=""></a>
                        </div><!--logo-->
                    </div><!--col-md-3-->


                    <div class="col-md-9">
                        <div class="social_icon1">
                            <a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a>
                            <!--Twitter-->
                            <a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a>
                            <!--Google +-->
                            <a class="icons-sm gplus-ic"><i class="fa fa-google-plus"> </i></a>
                            <!--Linkedin-->
                            <a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a>
                            <!--Pinterest-->
                            <a class="icons-sm pin-ic"><i class="fa fa-pinterest"> </i></a>
                        </div> <!--social_icon1-->
                    </div><!--col-md-3-->
                </div> <!--row-->
            </div><!--header-section-->
        </div><!-- /.container -->

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
                    <ul class="nav navbar-nav">
                        <li class="hidden"><a href="#page-top"></a></li>
                        <li><a class="page-scroll" href="category.html">Supermarket</a></li>

                        <li><a class="page-scroll" href="category.html">Electronice & Electrocastice</a></li>
                        <li><a class="page-scroll" href="category.html">Bricolaj</a></li>
                        <li><a class="page-scroll" href="category.html">Farmacii & Cosmetice</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- .navbar -->
    </header>

    <!--main content goes here-->
    @yield('content')


    <footer class="footer_section section_wrapper section_wrapper" >
        <div class="footer_top_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="text_widget footer_widget">
                            <div class="footer_widget_title"><h2>Despre Noi</h2></div>

                            <div class="footer_widget_content">Collaborativelyadministrate empowered marketsplug-and-play networks. Dynamic procrastinate after.marketsplug-and-play networks. Dynamic procrastinate users after. Dynamic procrastinateafter. marketsplug-and-play networks. Dynamic procrastinate users after...
                            </div>
                        </div><!--text_widget-->
                    </div><!--col-xs-3-->

                    <div class="col-md-6">
                        <div class="footer_widget">
                            <div class="footer_widget_title"><h2>Linkuri Utile</h2></div>
                            <div class="footer_menu_item ">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="nav navbar-nav ">
                                            <li><a href="../navbar/">Baseball</a></li>
                                            <li><a href="../navbar-static-top/">Football</a></li>
                                            <li><a href="./">Cricket</a></li>
                                            <li><a href="../navbar/">Rugbi</a></li>
                                            <li><a href="../navbar/">Hockey</a></li>
                                            <li><a href="../navbar-static-top/">Boxing</a></li>
                                            <li><a href="./">Golf</a></li>
                                            <li><a href="../navbar/">Tennis</a></li>
                                            <li><a href="../navbar/">Horse Racing</a></li>
                                        </ul>
                                    </div><!--col-sm-4-->
                                    <div class="col-sm-4 ">
                                        <ul class="nav navbar-nav  ">
                                            <li><a href="../navbar/">Track & Field</a></li>
                                            <li><a href="../navbar-static-top/">MembershipContact us</a></li>
                                            <li><a href="./">Newsletter Alerts</a></li>
                                            <li><a href="../navbar/">Podcast</a></li>
                                            <li><a href="../navbar/">Blog</a></li>
                                            <li><a href="../navbar-static-top/">SMS Subscription</a></li>
                                            <li><a href="./">Advertisement Policy</a></li>
                                            <li><a href="../navbar/">Jobs</a></li>
                                        </ul>
                                    </div><!--col-sm-4-->
                                    <div class="col-sm-4">
                                        <ul class="nav navbar-nav ">
                                            <li><a href="../navbar/">Report technical issue</a></li>
                                            <li><a href="../navbar-static-top/">Complaints & Corrections</a></li>
                                            <li><a href="./">Terms & Conditions</a></li>
                                            <li><a href="../navbar-static-top/">Privacy Policy</a></li>
                                            <li><a href="./">Cookie Policy</a></li>
                                            <li><a href="../navbar/">Securedrop</a></li>
                                            <li><a href="../navbar/">Archives</a></li>
                                        </ul>
                                    </div><!--col-sm-4-->
                                </div><!--row-->
                            </div><!--footer_menu_item-->
                        </div><!--footer_widget-->
                    </div><!--col-xs-6-->

                    <div class="col-md-3">
                        <div class="text_widget footer_widget">
                            <div class="footer_widget_title"><h2>Editor’s Message</h2></div>
                            <img src="/img/img-author.jpg" />
                            <div class="footer_widget_content">Collaborativelyadministrate empowered marketsplug-and-play networks. Dynamic procrastinate after.marketsplug-and-play networks. Dynamic procrastinate users after. Dynamic procrastinateafter. marketsplug-and-play networks. Dynamic procrastinate users after...</div>
                        </div>
                    </div><!--col-xs-3-->
                </div><!--row-->
            </div><!--container-->
        </div><!--footer_top_section-->
        <a href="#" class="crunchify-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
    </footer>

</div> <!--main-wrapper-->

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/js/jquery.min.js"></script>

<!-- Owl carousel -->
<script src="/js/owl.carousel.js"></script>

<!-- Bootstrap -->
<script src="/js/bootstrap.min.js"></script>

<!-- Theme Script File-->
<script src="/js/script.js"></script>

<!-- Off Canvas Menu -->
<script src="/js/offcanvas.min.js"></script>



</body>
</html>