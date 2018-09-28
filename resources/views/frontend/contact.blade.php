@extends('layouts.main')

@push('styles')
    {{--{!! Html::style('css/style-update.css') !!}--}}
@endpush

@section('title'){{ trans('front.home_title') }}@endsection
@section('desc'){{ trans('front.home_desc') }}@endsection

@section('og')
    <meta property="og:title" content="{{ trans('front.home_title') }}" />
    <meta property="og:description" content="Croco este un crocodil foarte activ și curios care caută și publică cele mai noi cataloage și broșuri de la supermarket-uri, magazine de electronice, bricolaj și farmacii din Moldova." />
    <meta property="og:url" content="http://croco.md/ro" />
    <meta property="og:image" content="{{ url('/img/sidebar.png') }}" />
@endsection

@section('content')
    <section id="feature_category_section" class="feature_category_section single-page section_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="single_content_layout">

                        <div class="add_a_comment">
                            <div class="single_media_title"><h2>{{ trans('general.Contact Us') }}</h2></div>
                            {{--Error--}}
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            {{--Success--}}
                            @if (Session::has('status'))
                                <div class="alert alert-success">
                                    <ul>
                                        <li>{!! session('status') !!}</li>
                                    </ul>
                                </div>

                            @endif

                            {{--Form--}}
                            <div class="comment_form">
                                {!! Form::open(['route' => 'contact']) !!}

                                    <div class="form-group">
                                        {!! Form::text('name', null, ['class' => 'form-control', 'placeholder'=> trans('general.Name') , 'required', 'maxlength' => '255', 'minlength' => '3']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::email('email', null, ['class' => 'form-control', 'placeholder'=> trans('general.Email'), 'required', 'maxlength' => '255', 'minlength' => '3']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::textarea('message', null, ['class' => 'form-control', 'placeholder'=> trans('general.Message'), 'required', 'maxlength' => '5000', 'minlength' => '3']) !!}
                                    </div>

                                <button type="submit" class="btn btn-submit red">{{ trans('general.Submit') }}</button>
                                {!! Form::close() !!}
                            </div><!--comment_form-->
                        </div><!--add_a_comment-->

                    </div><!--single_content_layout-->
                </div>

                <div class="push-wrapper"></div>
                <button class="push-button">Push Button</button>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection