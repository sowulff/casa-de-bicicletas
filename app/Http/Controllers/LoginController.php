<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // die(var_dump($request));
        //     $request->validate([
        //         'email' => ['required', 'email'],
        //         'password' => ['required']
        //     ]);

        //     if (Auth::attempt($request->only(['email', 'password']))) {
        //         return redirect('admin/dashboard');
        //     }

        //     return back()->withErrors(['failedLogin' => 'something went wrong, please try again!']);
        // }
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('admin/dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
