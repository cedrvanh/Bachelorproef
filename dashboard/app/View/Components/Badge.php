<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Badge extends Component
{
    /**
     * The badge name.
     *
     * @var string
     */
    public $name;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Return the correct color.
     *
     * @return string
     */
    public function color($name)
    {
        switch($name) {
            case 'Admin':
                return 'danger';
                break;
            case 'Editor':
                return 'success';
                break;
            case 'User':
                return 'primary';
                break;
            default:
                return 'dark';
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('partials.badge');
    }
}
