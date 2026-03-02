<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
{
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $role = $request->user()->role;

        $target = match ($role) {
            'seller' => '/seller/dashboard',
            default => '/dashboard',
        };

        return $request->wantsJson()
                    ? response()->json(['status' => 'registered'], 201)
                    : redirect($target);
    }
}
