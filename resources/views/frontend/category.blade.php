@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title')
    contact
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-9">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category.jpg" alt="Chania" style="">
									    </div>
									<div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">Barcelona FC fix the special technique for goal machine</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->

                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category2.jpg" alt="Chania">
                                        </div> <!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">England women fooball team ahed 1:0 Goal</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->

                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category3.jpg" alt="Chania">
                                        </div> <!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">Neymar 4th goal in europian champion league</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->

                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category4.jpg" alt="Chania">
                                        </div> <!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">Juventus players raise the voice for victory</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->

                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category5.jpg" alt="Chania">
                                        </div> <!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">Rooney happy for 2 goals after long time</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->

                        <div class="col-md-4">
                            <div class="feature_news_item">
                                <div class="item">
                                    <div class="item_wrapper">
                                        <div class="item_img">
                                            <img class="img-responsive" src="/img/img-category6.jpg" alt="Chania">
                                        </div> <!--item_img-->
                                        <div class="item_title_date">
                                            <div class="news_item_title">
                                                <h2><a href="single.html">Alexis Sanchez &amp; Arsenal jointly champion the leage</a></h2>
                                            </div>
                                            <div class="item_meta"><a href="#">20Aug- 2015,</a> by:<a href="#">Jhonson</a></div>
                                        </div><!--item_title_date-->
                                    </div> <!--item_wrapper-->
                                    <div class="item_content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                                    </div>

                                </div><!--item-->
                            </div><!--feature_news_item-->
                        </div><!--col-md-4-->



                    </div><!--row-->
                </div>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection