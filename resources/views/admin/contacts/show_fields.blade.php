<!-- Id Field -->
<div class="form-group">
    {!! Form::label('id', 'Id:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->id !!}</div>
</div>

<!-- Name Field -->
<div class="form-group">
    {!! Form::label('name', 'Name:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->name !!}</div>
</div>

<!-- Email Field -->
<div class="form-group">
    {!! Form::label('email', 'Email:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->email !!}</div>
</div>

<!-- Subject Field -->
<div class="form-group">
    {!! Form::label('subject', 'Subject:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->subject !!}</div>
</div>

<!-- Message Field -->
<div class="form-group">
    {!! Form::label('message', 'Message:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->message !!}</div>
</div>

<!-- Created At Field -->
<div class="form-group">
    {!! Form::label('created_at', 'Created At:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->created_at !!}</div>
</div>

<!-- Updated At Field -->
<div class="form-group">
    {!! Form::label('updated_at', 'Updated At:', ['class' =>'col-md-2']) !!}
    <div class="col-md-10">{!! $contact->updated_at !!}</div>
</div>

