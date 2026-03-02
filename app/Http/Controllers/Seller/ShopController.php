<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $shop = auth()->user()->shop;
        
        if (!$shop) {
            return Inertia::render('seller/shop/create');
        }

        return Inertia::render('seller/shop/edit', [
            'shop' => $shop
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:500',
            'description' => 'nullable|string'
        ]);

        auth()->user()->shops()->create([
            'name' => $request->name,
            'address' => $request->address,
            'description' => $request->description,
            'is_active' => true
        ]);

        return Redirect::route('seller.dashboard')->with('success', 'Toko berhasil diaktifkan!');
    }

    public function update(Request $request, Shop $shop)
    {
        $this->authorize('update', $shop);

        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:500',
            'description' => 'nullable|string'
        ]);

        $shop->update($request->only('name', 'address', 'description'));

        return Redirect::back()->with('success', 'Profil toko berhasil diperbarui!');
    }
}
