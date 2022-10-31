<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class DeleteBookingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Booking $booking)
    {
        die(var_dump($booking));
        $booking->delete();
        return redirect('/admin/dashboard');
    }
}
