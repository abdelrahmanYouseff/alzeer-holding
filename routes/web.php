<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $brands = \App\Models\Brand::where('is_active', true)->orderBy('sort_order')->get();
    $contactInfo = \App\Models\ContactInformation::first();

    return Inertia::render('Home', [
        'brands' => $brands,
        'contactInfo' => $contactInfo
    ]);
})->name('home');


Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Public API route for website data (no authentication required)
Route::get('api/website-data', [App\Http\Controllers\WebsiteController::class, 'getWebsiteData'])->name('website.data');

// Portfolio PDF route
Route::get('portfolio', function () {
    $filePath = public_path('asset/pdf/portfolio.pdf');

    if (file_exists($filePath)) {
        return response()->file($filePath, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="portfolio.pdf"',
            'Cache-Control' => 'no-cache, no-store, must-revalidate',
            'Pragma' => 'no-cache',
            'Expires' => '0'
        ]);
    }

    abort(404, 'Portfolio file not found');
})->name('portfolio');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
