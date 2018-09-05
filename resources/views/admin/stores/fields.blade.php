<!-- Name Ro Field -->
<div class="form-group {{ $errors->has('name_ro') ? 'has-error' : ''}}">
    {!! Form::label('name_ro', 'Name Ro:') !!}
    {!! Form::text('name_ro', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Name Ru Field -->
<div class="form-group {{ $errors->has('name_ru') ? 'has-error' : ''}}">
    {!! Form::label('name_ru', 'Name Ru:') !!}
    {!! Form::text('name_ru', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name_ru', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ro Field -->
<div class="form-group {{ $errors->has('description_ro') ? 'has-error' : ''}}">
    {!! Form::label('description_ro', 'Description Ro:') !!}
    {!! Form::text('description_ro', null, ['class' => 'form-control']) !!}
    {!! $errors->first('description_ro', '<p class="help-block">:message</p>') !!}
</div>

<!-- Description Ru Field -->
<div class="form-group {{ $errors->has('description_ru') ? 'has-error' : ''}}">
    {!! Form::label('description_ru', 'Description Ru:') !!}
    {!! Form::text('description_ru', null, ['class' => 'form-control']) !!}
    {!! $errors->first('description_ru', '<p class="help-block">:message</p>') !!}
</div>

<!-- Slug Field -->
<div class="form-group {{ $errors->has('slug') ? 'has-error' : ''}}">
    {!! Form::label('slug', 'Slug:') !!}
    {!! Form::text('slug', null, ['class' => 'form-control']) !!}
    {!! $errors->first('slug', '<p class="help-block">:message</p>') !!}
</div>

<!-- Logo Field -->
{{--<div class="form-group {{ $errors->has('logo') ? 'has-error' : ''}}">--}}
    {{--{!! Form::label('logo', 'Logo:') !!}--}}
    {{--{!! Form::text('logo', null, ['class' => 'form-control']) !!}--}}
    {{--{!! $errors->first('logo', '<p class="help-block">:message</p>') !!}--}}
{{--</div>--}}

<div class="form-group  {{ $errors->has('logo') ? 'has-error' : ''}}">
    {!! Form::label('logo', 'Logo:') !!}
    <div class="file-loading">
        <input id="file-1" type="file" name="logo" class="file" data-msg-placeholder="Logo...">
    </div>
    {!! $errors->first('logo', '<p class="help-block">:message</p>') !!}
</div>

<div class="form-group  {{ $errors->has('html_ro') ? 'has-error' : ''}}">
    {!! Form::label('html_ro', 'Html Ro:') !!}
    {!! Form::textarea('html_ro', null, ['class' => 'form-control textarea']) !!}
    {!! $errors->first('html_ro', '<p class="help-block">:message</p>') !!}
</div>

<div class="form-group  {{ $errors->has('html_ru') ? 'has-error' : ''}}">
    {!! Form::label('html_ru', 'Html Ru:') !!}
    {!! Form::textarea('html_ru', null, ['class' => 'form-control textarea']) !!}
    {!! $errors->first('html_ru', '<p class="help-block">:message</p>') !!}
</div>


<div class="form-group  {{ $errors->has('json_coords') ? 'has-error' : ''}}">
    {!! Form::label('json_coords', 'Coordinates:') !!}
    {!! Form::textarea('json_coords', null, ['class' => 'form-control']) !!}
    {!! $errors->first('json_coords', '<p class="help-block">:message</p>') !!}
</div>

<!-- Submit Field -->
<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.stores.index') !!}" class="btn btn-default">Cancel</a>
</div>

@push('styles')
    <link rel="stylesheet" href="/la-assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css">
@endpush

@push('scripts')
    <script src="/la-assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>

    <script>$('.textarea').wysihtml5({
            toolbar: {
                "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
                "emphasis": true, //Italics, bold, etc. Default true
                "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
                "html": true, //Button which allows you to edit the generated HTML. Default false
                "link": true, //Button to insert a link. Default true
                "image": false, //Button to insert an image. Default true,
                "color": true, //Button to change color of font
                "blockquote": true, //Blockquote
        }
        });</script>
@endpush
