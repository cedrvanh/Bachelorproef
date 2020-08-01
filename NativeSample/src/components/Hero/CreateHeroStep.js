import React, { Component } from 'react';

import HeroForm from '~/components/Form/HeroForm';
import Header from "~/components/Header";

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

    // Move to next step
    nextStep = (state) => {
        // Save MultiStep state
        this.props.saveState(state);
        this.props.next();
    }
    
    render() {
        return (
            <React.Fragment>
                <Header title ={ 'Create a hero' } />
                <HeroForm nextStep={this.nextStep} />
            </React.Fragment>
        )
    }
}

export default CreateHeroStep;