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

        $request->validate(
            [
                'first_name' => 'string|required',
                'last_name' => 'string|required',
                'email' => 'email|required',
                'mobile' => 'required',
                'guests' => 'required',
                'start_date' => 'required',
                'end_date' => 'required'
            ]

        );

        // dd($request->input());
        $booking = new Booking();
        // här skall siffran som står i url:en skickas in i DB.
        $booking->room_id = $request->input('room_id');
        $booking->first_name = $request->input('first_name');
        $booking->last_name = $request->input('last_name');
        $booking->email = $request->input('email');
        $booking->mobile = $request->input('mobile');
        $booking->guests = $request->input('guests');
        $booking->start_date = $request->input('start_date');
        $booking->end_date = $request->input('end_date');
        $booking->save();
        return redirect('booking/confirmation');
    }
}
