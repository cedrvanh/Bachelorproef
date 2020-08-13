<?php

namespace App\Providers;

use ConsoleTVs\Charts\Registrar as Charts;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
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

        Schema::defaultStringLength(191);

        $charts->register([
            \App\Charts\HomeChart::class
        ]);

        // Define names for our polymorphic relations
        Relation::morphMap([
            'question' => 'App\Question',
            'scan' => 'App\Scan',
            'info' => 'App\Info',
            'video' => 'App\Video',
        ]);

        // Custom validation rule - checks if polymorphic type is valid
        Validator::extend('poly_exists', function ($attribute, $value, $parameters, $validator) {
            if (!$type = Arr::get($validator->getData(), $parameters[0], false)) {
                return false;
            }

            if (Relation::getMorphedModel($type)) {
                $type = Relation::getMorphedModel($type);
            }

            if (!class_exists($type)) {
                return false;
            }

            return !empty(resolve($type)->find($value));
        });
    }
}
