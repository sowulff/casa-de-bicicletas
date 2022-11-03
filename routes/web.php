<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeleteBookingController;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ListAllRoomsController;
use App\Http\Controllers\ListBookingController;
use App\Http\Controllers\NewBookingController;

use App\Models\Booking;
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
    return Inertia::render('Home/Home');
});

Route::get('/galleri', function () {
    return Inertia::render('Gallery/Gallery');
});


Route::get('/cykling', function () {
    return Inertia::render('Cycling/Cycling');
});

Route::get('/om-oss', function () {
    return Inertia::render('About/About');
});
// Route::get('/admin/dashboard', DashboardController::class);

Route::get('/boka', ListAllRoomsController::class, function () {
    return Inertia::render('Booking/SelectRoom');
});

Route::get('/booking/room/{id}', ListBookingController::class);


Route::get('/booking/room', function () {
    return Inertia::render('Booking/SelectDates');
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Login');
});


Route::post('/login', LoginController::class);


Route::get('/admin/dashboard', DashboardController::class)->middleware('auth');

Route::get('/admin/dashboard', DashboardController::class)->middleware('auth');

Route::get('/booking/confirmation', function () {
    return Inertia::render('Booking/Confirmation');
});;



//Route::group(['middleware' => ['auth']], function () {
//   Route::get('/', DashboardController::class)->name('dashboard');
//});

Route::post('/upload', NewBookingController::class);
Route::post('/bookings/{booking}', DeleteBookingController::class);
