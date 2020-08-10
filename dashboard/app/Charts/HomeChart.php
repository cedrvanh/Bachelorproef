<?php

declare(strict_types = 1);

namespace App\Charts;

use App\Character;
use Chartisan\PHP\Chartisan;
use ConsoleTVs\Charts\BaseChart;
use Illuminate\Http\Request;

class HomeChart extends BaseChart
{
    public ?string $routeName = 'home_chart';

    public ?array $middlewares = [];

    public function handler(Request $request): Chartisan
    {
        $characters = Character::select(\DB::raw("COUNT(*) as count"))
                        ->whereYear('created_at', date('Y'))
                        ->groupBy(\DB::raw("Day(created_at)"))
                        ->pluck('count');

                        return Chartisan::build()
            ->labels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
            ->dataset('New Characters', [21, 17, 10, 30, 10, 25, 42]);
    }
}
