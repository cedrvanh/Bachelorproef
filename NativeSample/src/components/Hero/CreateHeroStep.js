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


    nextStep = (state) => {
        // Save MultiStep state
        this.props.saveState(state);
        // Move to next step
        this.props.next();
    }
    
    render() {
        return (
            <HeroForm nextStep={this.nextStep} />
        )
    }
}

export default CreateHeroStep;