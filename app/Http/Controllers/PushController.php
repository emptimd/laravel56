<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PushController extends AppBaseController
{

    public function subscribe(Request $request)
    {

        dd($request->all());
    }

    public function unsubscribe(Request $request)
    {
        dd($request->all());

        return view('unsubscribe', []);
    }
}
