<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;


class ListAllRoomsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $rooms = Room::all();
        return inertia('Booking', ['rooms' => $rooms],);
    }
}
