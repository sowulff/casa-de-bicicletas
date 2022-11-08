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
    public function __invoke($id)

    {
        $rooms = Room::where('id', $id)->get();
        $bookings = Booking::where('room_id', $id)->get();

        return inertia('Booking/SelectDates', [
            'room' => $id,
            'bookings' => $bookings,
            'rooms' => $rooms
        ]);
    }
}
