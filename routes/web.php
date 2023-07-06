<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Orhanerday\OpenAi\OpenAi;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{page?}', function() {
    return view('main');
})->where('page', '[\/\w\.-]*');

Route::post('/query', function(Request $r) {
    return response()->json([$r->all()]);
});
Route::post('/chat', function(Request $r) {
    $open_ai = new OpenAi(env('OPENAI_API_KEY'));

    $chat = $open_ai->chat([
        'model' => 'gpt-3.5-turbo',
        'messages' => [
            [
                "role" => "user",
                "content" => $r->input('query')
            ]
        ],
        'temperature' => 1.0,
        'max_tokens' => 4000,
        'frequency_penalty' => 0,
        'presence_penalty' => 0,
    ]);

    // decode response
    $d = json_decode($chat);

    return response()->json([
        'input' => $r->all(),
        'data' => $d,
        'reply' => $d->choices[0]->message->content ?? ''
    ]);
});
