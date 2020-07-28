import React, { useState, Component } from 'react';

import HeroForm from '~/components/Form/HeroForm';
import Button from '~/components/Base/Button';

class CreateHeroStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalSteps: "",
            currentStep: ""
        }
    }

    static getDerivedStateFromProps = props => {
        const { getTotalSteps, getCurrentStep } = props;
        return {
          totalSteps: getTotalSteps(),
          currentStep: getCurrentStep()
        };
    };

    nextStep = () => {
        const { next, saveState } = this.props;
        // Move to next step
        next();
    }
    
    render() {
        const { currentStep, totalSteps } = this.state;
        return (
            <React.Fragment>
                <HeroForm />
                <Button onPress={this.nextStep} label="Proceed" />
            </React.Fragment>    
        )
    }
}

export default CreateHeroStep;