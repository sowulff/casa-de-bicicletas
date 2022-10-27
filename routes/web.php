<?php

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
    return Inertia::render('Home');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});

Route::get('/booking', ListAllRoomsController::class, function () {
    return Inertia::render('Booking/SelectRoom');
});

Route::get('/booking/room/{id}', ListBookingController::class);

Route::get('/booking/room', function () {
    return Inertia::render('Booking/SelectDates');
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Login');
});
// Route::get('/admin/dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// });

// Route::get('/admin/dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// });

// Route::post(
//     'login',
//     LoginController::class
// );

// Route::get('/login', [LoginController::class, 'index'])->name('login');

Route::post('/login', LoginController::class);


//Route::group(['middleware' => ['auth']], function () {
//   Route::get('/', DashboardController::class)->name('dashboard');
//});

Route::post('/upload', NewBookingController::class);
