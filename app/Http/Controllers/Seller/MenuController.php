<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $shop = auth()->user()->shop;
        
        if (!$shop) {
            return Redirect::route('seller.shop.index');
        }

        $menus = $shop->menus()->with('nutrients', 'categories')->latest()->get();

        return Inertia::render('seller/menu/index', [
            'menus' => $menus
        ]);
    }

    public function create()
    {
        return Inertia::render('seller/menu/create', [
            'categories' => Category::all()
        ]);
    }

    public function store(Request $request)
    {
        $shop = auth()->user()->shop;

        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'recipe_steps' => 'nullable|string',
            'categories' => 'array'
        ]);

        $menu = $shop->menus()->create($request->only('name', 'description', 'recipe_steps', 'price', 'stock'));

        if ($request->has('categories')) {
            $menu->categories()->sync($request->categories);
        }

        // Initialize empty nutrients (to be filled by admin/auto later)
        $menu->nutrients()->create();

        return Redirect::route('seller.menu.index')->with('success', 'Menu berhasil ditambahkan! Menunggu verifikasi admin.');
    }
}
