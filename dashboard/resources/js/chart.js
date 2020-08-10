import { Chartisan } from '@chartisan/chartjs'

export const initChart = () => {
    if(document.querySelector('.js-chart')) {
        new Chartisan({
            el: '#character-chart',
            url: "api/chart/home_chart",
            hooks: new ChartisanHooks()
            .beginAtZero()
            .colors()
            .borderColors()
            .datasets([{ type: 'line', fill: false }, 'bar']),
        })

        new Chartisan({
            el: '#route-chart',
            url: "api/chart/home_chart",
            hooks: new ChartisanHooks()
            .beginAtZero()
            .colors()
            .borderColors()
            .datasets([{ type: 'line', fill: false }, 'bar']),
        })
    }
}
