<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display the specified menu.
     */
    public function show(Menu $menu)
    {
        $menu->load(['shop', 'nutrients', 'categories', 'reviews.user']);

        $reviews = $menu->reviews;
        $avgRating = $reviews->avg('rating') ?: 0;
        $ratingCounts = [];
        for ($i = 5; $i >= 1; $i--) {
            $ratingCounts[$i] = $reviews->where('rating', $i)->count();
        }

        return Inertia::render('user/menus/show', [
            'menu' => $menu,
            'reviewStats' => [
                'average' => round($avgRating, 1),
                'total' => $reviews->count(),
                'distribution' => $ratingCounts,
            ],
        ]);
    }
}
