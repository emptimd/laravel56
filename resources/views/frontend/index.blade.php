@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title')
    testtt
@endsection

@section('content')

    <!-- Feature Carousel Section -->
    <section id="feature_news_section" class="feature_news_section section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="feature_news_carousel">
                        <div id="featured-news-carousal" class="carousel slide" data-ride="carousel">
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                @foreach($silder_products as $product)
                                    <div class="item feature_news_item {{ $loop->first ? 'active' : '' }}">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <img class="img-responsive" src="{{ url('storage/'.$product->path_ro) }}" alt="Image">
                                            </div> <!--item_img-->  {{----}}
                                            <div class="item_title_date">
                                                <div class="news_item_title">
                                                    <h2><a href="{{ url('catalog/'.$product->id) }}">{{ $product->name_ro }}</a></h2>
                                                </div>
                                                <div class="item_meta"><a href="#">{{ $product->until->format('Y-m-d') }}</a></div>
                                            </div> <!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>
                                    </div><!--feature_news_item-->
                                @endforeach


                                {{--<div class="item active feature_news_item">--}}
                                    {{--<div class="item_wrapper">--}}
                                        {{--<div class="item_img">--}}
                                            {{--<img class="img-responsive" src="/img/img-carousel1.jpg" alt="Chania">--}}
                                        {{--</div> <!--item_img-->--}}
                                        {{--<div class="item_title_date">--}}
                                            {{--<div class="news_item_title">--}}
                                                {{--<h2><a href="single.html">Seamlessly embrace B2C catalysts for change vis-a-vis economically sound communities.</a></h2>--}}
                                            {{--</div>--}}
                                            {{--<div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>--}}
                                        {{--</div> <!--item_title_date-->--}}
                                    {{--</div>	<!--item_wrapper-->--}}
                                    {{--<div class="item_content"></div>--}}

                                {{--</div><!--feature_news_item-->--}}


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
                </div><!--col-md-6-->

                <div class="col-md-6">
                    <div class="feature_news_static">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="feature_news_item">
                                    <div class="item active">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <img class="img-responsive" src="/img/img_feature.jpg" alt="Chania">
                                            </div> <!--item_img-->
                                            <div class="item_title_date">
                                                <div class="news_item_title">
                                                    <h2><a href="single.html">Track Roboto the Real Tracker.</a></h2>
                                                </div>
                                                <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                            </div><!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>

                                    </div><!--item-->
                                </div><!--feature_news_item-->
                            </div>

                            <div class="col-md-6">
                                <div class="feature_news_item">
                                    <div class="item active">
                                        <div class="item_wrapper">
                                            <div class="item_img">
                                                <img class="img-responsive" src="/img/img_feature2.jpg" alt="Chania">
                                            </div> <!--item_img-->
                                            <div class="item_title_date">
                                                <div class="news_item_title">
                                                    <h2><a href="single.html">David villa change his team last year.</a></h2>
                                                </div>
                                                <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                            </div><!--item_title_date-->
                                        </div> <!--item_wrapper-->
                                        <div class="item_content"></div>

                                    </div><!--item-->
                                </div><!--feature_news_item-->
                            </div><!--col-xs-6-->
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
                <div class="col-md-9">
                    <div class="category_layout">
                        <div class="item_caregory red"><h2><a href="category.html">Supermarkete</a></h2></div>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="item feature_news_item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img_feature_news.jpg" alt="Chania">
                                        </div><!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="#">22Leo Messi is boss of the bosses of the football world.</a></h2>
                                            </div><!--news_item_title-->
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div><!--item_wrapper-->
                                    <div class="item_content"></div><!--item_content-->

                                </div><!--feature_news_item-->
                            </div><!--col-md-7-->

                            <div class="col-md-5">
                                <div class="media_wrapper">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list2.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list3.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list4.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->
                                </div><!--media_wrapper-->

                            </div><!--col-md-5-->
                        </div><!--row-->
                    </div><!--category_layout-->

                    <div class="category_layout">
                        <div class="item_caregory blue"><h2><a href="#">Hockey</a></h2></div>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="item active feature_news_item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-hockey.jpg" alt="Chania">
                                        </div><!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="#">Argentia ahead two step playing hockey tournament</a></h2>
                                            </div><!--news_item_title-->
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div><!--item_wrapper-->
                                    <div class="item_content"></div>

                                </div><!--feature_news_item-->
                            </div><!--col-md-7-->

                            <div class="col-md-5">
                                <div class="media_wrapper">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list5.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list6.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list7.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list4.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->
                                </div><!--media_wrapper-->
                            </div><!--col-md-5-->
                        </div><!--row-->
                    </div><!--category_layout-->

                    <div class="category_layout">
                        <div class="item_caregory teal"><h2><a href="#">Tennis</a></h2></div>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="item active feature_news_item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img_feature_news3.jpg" alt="Chania">
                                        </div><!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="#">Leo Messi is boss of the bosses of the football world.</a></h2>
                                            </div><!--news_item_title-->
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div><!--item_wrapper-->
                                    <div class="item_content"></div>

                                </div><!--feature_news_item-->
                            </div><!--col-md-7-->

                            <div class="col-md-5">
                                <div class="media_wrapper">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list7.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list8.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list9.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list4.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->
                                </div><!--media_wrapper-->
                            </div><!--col-md-5-->
                        </div><!--row-->
                    </div><!--category_layout-->


                    <div class="category_layout">
                        <div class="item_caregory teal"><h2><a href="#">Tennis</a></h2></div>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="item active feature_news_item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img_feature_news3.jpg" alt="Chania">
                                        </div><!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="#">Leo Messi is boss of the bosses of the football world.</a></h2>
                                            </div><!--news_item_title-->
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div><!--item_wrapper-->
                                    <div class="item_content"></div>

                                </div><!--feature_news_item-->
                            </div><!--col-md-7-->

                            <div class="col-md-5">
                                <div class="media_wrapper">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list7.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list8.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list9.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->

                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/img/img-list4.jpg" alt="Generic placeholder image"></a>
                                        </div><!--media-left-->
                                        <div class="media-body">
                                            <h3 class="media-heading"><a href="#">Machester United start the player
                                                </a></h3>

                                            <p>Sed perspiciatis unde omnis iste natus voluptatem.</p>

                                        </div><!--media-body-->
                                    </div><!--media-->
                                </div><!--media_wrapper-->
                            </div><!--col-md-5-->
                        </div><!--row-->
                    </div>


                </div><!--col-md-9-->

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section><!--feature_category_section-->


@endsection('content')