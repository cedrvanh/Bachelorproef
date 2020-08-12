@extends('layouts.dashboard')

@section('content')
    <div class="row">
        @foreach($totals as $total => $amount)
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">{{ Str::ucfirst($total) }}</div>
                    <div class="card-body">
                        <p class="card-text">Total records</p>
                        <h2 class="card-title">{{ $amount }}</h2>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    <div class="row">
        <div class="col-sm-8">
            <!-- Chart.JS container -->
            <div class="js-chart" id="character-chart" style="height: 300px;"></div>
        </div>
    </div>
@endsection
