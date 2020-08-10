<?php

namespace App\Http\Controllers;

use App\Character;
use App\Charts\HomeChart;
use App\Route;
use App\Task;
use App\User;
use Charts;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $chart = new HomeChart();

        $totals = [
            'routes' => Route::count(),
            'tasks' => Task::count(),
            'characters' => Character::count(),
        ];

        return view('home', compact('chart', 'totals'));
    }
}
