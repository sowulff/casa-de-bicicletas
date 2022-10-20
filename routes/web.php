<?php

// use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\ListAllRoomsController;
use App\Http\Controllers\NewBookingController;
use App\Models\Room;


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'name' => 'Sophie',
    ]);
});
Route::get('/booking', ListAllRoomsController::class, function () {
    return Inertia::render('Booking/SelectRoom');
});
Route::get('/booking/{id}', function (Room $id) {
    return Inertia::render('Booking/SelectDates', [
        'room' => $id,
    ]);
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Login');
});

Route::post('/upload', NewBookingController::class);

// Route::middleware('guest')->group(function () {
//     Route::get('login', [LoginController::class, 'create'])->name('login');
//     Route::post('login', [LoginController::class, 'store']);
// });
