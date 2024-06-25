<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('init', function () {
    $this->info('Running Migration Scripts');
    Artisan::call('migrate');
    $this->info('Done Migrating Database');
    $this->info('Seeding Database');
    Artisan::call('db:seed');
    $this->info('Done Seeding');
    $this->info('Server Running on [http://127.0.0.1:8000]');
    Artisan::call('serve');
});

Artisan::command('reset', function () {
    $this->info('Resetting Database');
    Artisan::call('migrate:reset');
    $this->info('Done Resetting Database');
});
