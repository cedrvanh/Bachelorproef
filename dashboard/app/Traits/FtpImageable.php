<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;

trait FtpImageable
{
    public function getImageAttribute()
    {
        if (empty($this->attributes['image'])) {
            return null;
        }

        return $this->ftpFile();
    }

    protected function uploadImage(UploadedFile $file, $path = null, $fileName)
    {
        $name = !is_null($fileName) ? $fileName : $this->id;
        $fullPath = 'public/' . $path;

        $upload = $file->storeAs($fullPath, $name);
        return $upload;
    }

    protected function ftpFile($column = 'image', $type = 'jpg', $name = null)
    {
        $fileName = $name;
        $baseUrl = config('app.ftp_url') ?? url('/');

        if (app()->environment() !== 'production') {
            return $baseUrl . '/storage/' . $this->getTable() . '/' . $column . '/' . $this->id . '.' . $type;
        }

        return $baseUrl . '/storage/' . $this->getTable() . '/' . $column . '/' . $this->id . '/' . $fileName . '.' . $type;
    }
}
