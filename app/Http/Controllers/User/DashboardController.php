<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $menus = Menu::with(['nutrients', 'categories', 'shop'])
            ->where('is_verified', true)
            ->where('is_available', true)
            ->latest()
            ->get();

        return Inertia::render('user/dashboard', [
            'menus' => $menus
        ]);
    }
}
