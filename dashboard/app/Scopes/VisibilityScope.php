<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class VisibilityScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        if (!empty($model->previewKey) && request()->has($model->previewKey)) {
            return;
        }

        if (!empty($model->visibilityField)) {
            $builder->where($model->visibilityField, 1);
            return;
        }

        $builder->where('visible', 1);
    }
}
