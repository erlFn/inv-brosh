<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::name('user.')->group(function () {
    Route::get('dashboard', fn () => Inertia::render('user/dashboard'))->name('dashboard');
});