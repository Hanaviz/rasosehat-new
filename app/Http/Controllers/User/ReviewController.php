<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    /**
     * Store a new review for a menu.
     */
    public function store(Request $request, Menu $menu)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // Check if user already reviewed this menu
        $existing = Review::where('user_id', $request->user()->id)
            ->where('menu_id', $menu->id)
            ->first();

        if ($existing) {
            return back()->withErrors(['rating' => 'Anda sudah memberikan ulasan untuk menu ini.']);
        }

        $photoPath = null;
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('reviews', 'public');
        }

        Review::create([
            'user_id' => $request->user()->id,
            'menu_id' => $menu->id,
            'rating' => $request->rating,
            'comment' => $request->comment,
            'photo_path' => $photoPath ? '/storage/' . $photoPath : null,
        ]);

        return back()->with('success', 'Ulasan berhasil ditambahkan!');
    }
}
