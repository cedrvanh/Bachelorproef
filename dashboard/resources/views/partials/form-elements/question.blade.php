<div class="form-row task-type hidden" id="type-{{ $iteration }}">
    <div class="col-md-12">
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="inputQuestion">Question</label>
                <input type="text" class="form-control" id="inputQuestion" placeholder="Enter a question" name="question">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="inputHint">Hint</label>
                <input type="text" class="form-control" id="inputHint" placeholder="Enter a hint" name="hint">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="inputFirstChoice">Choice 1</label>
                <input type="text" class="form-control" id="inputFirstChoice" placeholder="Enter a possible choice" name="choice[]">
            </div>
            <div class="form-check col-md-4">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                <label class="form-check-label" for="gridRadios1">
                    Correct
                </label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="inputSecondChoice">Choice 2</label>
                <input type="text" class="form-control" id="inputSecondChoice" placeholder="Enter a possible choice" name="choice[]">
            </div>
            <div class="form-check col-md-4">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1">
                <label class="form-check-label" for="gridRadios1">
                    Correct
                </label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="inputThirdChoice">Choice 3</label>
                <input type="text" class="form-control" id="inputThirdChoice" placeholder="Enter a possible choice" name="choice[]">
            </div>
            <div class="form-check col-md-4">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1">
                <label class="form-check-label" for="gridRadios1">
                    Correct
                </label>
            </div>
        </div>
    </div>
</div>
