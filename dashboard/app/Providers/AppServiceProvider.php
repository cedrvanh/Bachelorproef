<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::defaultView("partials.pagination");

        // Relation::morphMap([
        //     'question' => 'App\Question',
        //     'scan' => 'App\Scan',
        //     'info' => 'App\Info',
        //     'video' => 'App\Video',
        // ]);
    }
}
