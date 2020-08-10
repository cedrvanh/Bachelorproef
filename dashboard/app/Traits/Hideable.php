<?php

namespace App\Traits;

use App\Scopes\VisibilityScope;

/**
 * Implement to automatically add visible = 1 to every query
 */
trait Hideable
{
    protected static function bootHideable()
    {
        static::addGlobalScope(new VisibilityScope());
    }

    // Usage: Model::includeHidden->get()
    public function scopeIncludeHidden($query)
    {
        return $query->withoutGlobalScopes([
            VisibilityScope::class,
        ]);
    }
}
