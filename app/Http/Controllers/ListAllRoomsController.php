<?php

namespace App\Http\Controllers;

use App\Models\Rooms;
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

        $rooms = Rooms::all();

        return inertia('Booking', ['rooms' => $rooms],);
    }
}
