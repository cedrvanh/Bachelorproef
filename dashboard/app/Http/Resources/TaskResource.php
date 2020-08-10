<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'reward' => $this->reward,
            'score' => $this->score,
            'image' => $this->image,
            'location' => new LocationResource($this->location),
            'type' => $this->taskable
        ];
    }
}
