<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('auth')->name('auth.')->group(function () {
    // Verification
    Route::get('/verification', fn() => Inertia::render('auth/verification'))->name('verification');

    // Validation
    Route::get('/validation', fn() => Inertia::render('auth/validation'))->name('validation');
});