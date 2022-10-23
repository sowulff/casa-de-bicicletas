<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Room;
use Illuminate\Http\Request;

class ListBookingController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Room $id)
    {
        $bookings = Booking::all();
        return inertia('Booking/SelectDates', [
            'room' => $id,
            'bookings' => $bookings,
        ]);
    }
}
