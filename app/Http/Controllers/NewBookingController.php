<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class NewBookingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $booking = new Booking();
        // här skall siffran som står i url:en skickas in i DB.
        $booking->room_id = 2;
        $booking->first_name = $request->input('first_name');
        $booking->last_name = $request->input('first_name');
        $booking->email = $request->input('email');
        $booking->mobile = $request->input('mobile');
        $booking->guests = $request->input('guests');
        $booking->start_date = '2022-11-03';
        $booking->end_date = '2022-12-05';
        $booking->save();
        return back()->with('success', 'Item created successfully!');
    }
}
