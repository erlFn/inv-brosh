<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ItemDetailsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\SuppliersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::name('user.')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    Route::get('inventory', [InventoryController::class, 'index'])->name('inventory');

    Route::get('item-details', [ItemDetailsController::class, 'index'])->name('item-details');

    Route::get('suppliers', [SuppliersController::class, 'index'])->name('suppliers');

    Route::get('orders', [OrdersController::class, 'index'])->name('orders');
});