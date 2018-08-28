@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Store Category
        </h1>
   </section>
   <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($storeCategory, ['route' => ['admin.storeCategories.update', $storeCategory->id], 'method' => 'patch']) !!}

                        @include('admin.store_categories.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
   </div>
@endsection