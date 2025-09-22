<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $brands = \App\Models\Brand::where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Home', [
        'brands' => $brands
    ]);
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about-us');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Public API route for website data (no authentication required)
Route::get('api/website-data', [App\Http\Controllers\WebsiteController::class, 'getWebsiteData'])->name('website.data');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
