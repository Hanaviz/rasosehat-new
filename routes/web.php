<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('dashboard', [App\Http\Controllers\User\DashboardController::class, 'index'])->name('dashboard');
Route::get('menus/{menu:slug}', [App\Http\Controllers\User\MenuController::class, 'show'])->name('menus.show');

Route::middleware(['auth', 'verified'])->group(function () {
    // Review
    Route::post('menus/{menu}/reviews', [App\Http\Controllers\User\ReviewController::class, 'store'])->name('menus.reviews.store');

    Route::middleware('role:seller')->group(function () {
        Route::get('seller/dashboard', function () {
            return Inertia::render('seller/dashboard');
        })->name('seller.dashboard');

        // Shop Management
        Route::get('seller/shop', [App\Http\Controllers\Seller\ShopController::class, 'index'])->name('seller.shop.index');
        Route::post('seller/shop', [App\Http\Controllers\Seller\ShopController::class, 'store'])->name('seller.shop.store');
        Route::patch('seller/shop/{shop}', [App\Http\Controllers\Seller\ShopController::class, 'update'])->name('seller.shop.update');

        // Menu Management
        Route::get('seller/menu', [App\Http\Controllers\Seller\MenuController::class, 'index'])->name('seller.menu.index');
        Route::get('seller/menu/create', [App\Http\Controllers\Seller\MenuController::class, 'create'])->name('seller.menu.create');
        Route::post('seller/menu', [App\Http\Controllers\Seller\MenuController::class, 'store'])->name('seller.menu.store');
    });

    Route::middleware('role:admin')->group(function () {
        Route::get('admin/dashboard', function () {
            return Inertia::render('admin/dashboard');
        })->name('admin.dashboard');
    });
});

require __DIR__.'/settings.php';
