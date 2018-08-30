@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title')
    Single Product
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="single_content_layout">
                        <div class="item feature_news_item">
                            <div class="item_img">
                                <img class="img-responsive" src="{{ url('storage/'.$model->path_ro) }}" alt="Image">
                            </div><!--item_img-->
                            <div class="item_wrapper">
                                <div class="news_item_title">
                                    <h2><a>{{ $model->title_ro }}</a></h2>
                                </div><!--news_item_title-->
                                <div class="item_meta"><a>Valabil pina la {{ $model->until->format('Y-m-d') }}</a></div>

                                <div class="single_social_icon">
                                    <a class="icons-sm fb-ic" href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>
                                    <!--Twitter-->
                                    <a class="icons-sm tw-ic" href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
                                    <!--Google +-->
                                    <a class="icons-sm gplus-ic" href="#"><i class="fa fa-google-plus"></i><span>Google Plus</span></a>
                                    <!--Linkedin-->
                                    <a class="icons-sm li-ic" href="#"><i class="fa fa-linkedin"></i><span>Linkedin</span></a>

                                </div> <!--social_icon1-->

                                <div class="item_content">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    <br><br>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    <br><br>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam
                                </div><!--item_content-->
                                <div class="category_list">
                                    <a href="#">Messi</a>
                                    <a href="#">Leonel</a>
                                    <a href="#">Bercelona</a>
                                    <a href="#">Argentina</a>
                                    <a href="#">Football</a>
                                </div><!--category_list-->
                            </div><!--item_wrapper-->
                        </div><!--feature_news_item-->

                    </div><!--single_content_layout-->
                </div>

                @include('frontend._sidebar')

        </div>
    </section>
@endsection