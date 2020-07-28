import React, { Component } from "react";

import InteractiveModel from "~/components/Hero/InteractiveModel";
import Button from "~/components/Base/Button";

class PickClassStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: ""
    };
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
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
        <React.Fragment>
            <InteractiveModel />
            <Button onPress={this.nextStep} label="Proceed" />
        </React.Fragment>
    );
  }
}

export default PickClassStep;