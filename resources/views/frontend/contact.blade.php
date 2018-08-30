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
                    <div class="single_content_layout">

                        <div class="add_a_comment">
                            <div class="single_media_title"><h2>Contact Us</h2></div>
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
                                {!! Form::open(['url' => 'contact']) !!}

                                    <div class="form-group">
                                        {!! Form::text('name', null, ['class' => 'form-control', 'placeholder'=> 'Name', 'required', 'maxlength' => '255', 'minlength' => '3']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::email('email', null, ['class' => 'form-control', 'placeholder'=> 'Email', 'required', 'maxlength' => '255', 'minlength' => '3']) !!}
                                    </div>
                                    <div class="form-group">
                                        {!! Form::textarea('message', null, ['class' => 'form-control', 'placeholder'=> 'Message', 'required', 'maxlength' => '5000', 'minlength' => '3']) !!}
                                    </div>

                                <button type="submit" class="btn btn-submit red">Submit</button>
                                {!! Form::close() !!}





                                {{--<form>--}}
                                    {{--<div class="form-group">--}}
                                        {{--<input type="text" class="form-control" id="inputName" placeholder="Name">--}}
                                    {{--</div>--}}
                                    {{--<div class="form-group">--}}
                                        {{--<input type="text" class="form-control" id="inputEmail" placeholder="Email">--}}
                                    {{--</div>--}}
                                    {{--<div class="form-group comment">--}}
                                        {{--<textarea class="form-control" id="inputComment" placeholder="Comment"></textarea>--}}
                                    {{--</div>--}}

                                    {{--<button type="submit" class="btn btn-submit red">Submit</button>--}}
                                {{--</form>--}}
                            </div><!--comment_form-->
                        </div><!--add_a_comment-->

                    </div><!--single_content_layout-->
                </div>

                {{--include sidebar--}}
                @include('frontend._sidebar')
            </div>
        </div>
    </section>
@endsection