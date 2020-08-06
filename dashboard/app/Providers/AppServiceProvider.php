<?php

namespace App\Providers;

use ConsoleTVs\Charts\Registrar as Charts;
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
    public function boot(Charts $charts)
    {
        Paginator::defaultView("partials.pagination");

        $charts->register([
            \App\Charts\HomeChart::class
        ]);

        // Relation::morphMap([
        //     'question' => 'App\Question',
        //     'scan' => 'App\Scan',
        //     'info' => 'App\Info',
        //     'video' => 'App\Video',
        // ]);
    }
}
