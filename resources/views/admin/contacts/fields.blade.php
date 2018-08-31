<!-- Name Field -->
<div class="form-group  {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::label('name', 'Name:') !!}
    {!! Form::text('name', null, ['class' => 'form-control']) !!}
    {!! $errors->first('name', '<p class="help-block">:message</p>') !!}

</div>

<!-- Email Field -->
<div class="form-group  {{ $errors->has('email') ? 'has-error' : ''}}">
    {!! Form::label('email', 'Email:') !!}
    {!! Form::email('email', null, ['class' => 'form-control']) !!}
    {!! $errors->first('email', '<p class="help-block">:message</p>') !!}

</div>

<!-- Subject Field -->
<div class="form-group  {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::label('subject', 'Subject:') !!}
    {!! Form::text('subject', null, ['class' => 'form-control']) !!}
</div>

<!-- Message Field -->
<div class="form-group">
    {!! Form::label('message', 'Message:') !!}
    {!! Form::textarea('message', null, ['class' => 'form-control']) !!}
</div>

<!-- Submit Field -->
<div class="form-group col-sm-12">
    {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    <a href="{!! route('admin.contacts.index') !!}" class="btn btn-default">Cancel</a>
</div>
