@if ($flash = session('message'))
    <div class="alert alert-success flash-message" role="alert">
        <span class="flash-message__content">
            {{ $flash }}
        </span>
        <button type="button" class="close flash-message__action" data-dismiss="alert" aria-label="Close">
            <i data-feather="x" class="flash-message__icon"></i>
        </button>
    </div>
@endif