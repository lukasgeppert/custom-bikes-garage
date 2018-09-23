<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources([
    'bikes' => 'API\BikeController',
    'builders' => 'API\BuilderController',
    'items' => 'API\ItemsController',
    'bikes/{bike}/ratings' => 'API\RatingController'
]);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
