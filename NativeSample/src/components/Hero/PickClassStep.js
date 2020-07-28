import React, { Component } from "react";
import styled from 'styled-components';

import InteractiveModel from "~/components/Hero/InteractiveModel";
import Button from "~/components/Base/Button";
import SelectedCard from "~/components/SelectedCard";

import { HeroService as _heroService } from "~/services/HeroService";

import { utils } from '~/styles';

class PickClassStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      characterClasses: [],
      selectedClass: null
    };
  }

  componentDidMount() {
    this.getClasses();
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

  getClasses = async () => {
    const { data } = await _heroService.getCharacterClasses();
    this.setState(prevState => ({
      ...prevState,
      characterClasses: data
    }));
  }

  selectClass = (id) => {
    this.setState(prevState => ({
      ...prevState,
      selectedClass: id
    }))
  }

  render() {
    const { characterClasses, selectedClass } = this.state;
    return (
        <React.Fragment>
            <CardContainer>
              {characterClasses && characterClasses.map((characterClass) => (
                <SelectedCard 
                  key={characterClass.id}
                  data={characterClass.name}
                  selected={selectedClass === characterClass.id}
                  onPress={() => this.selectClass(characterClass.id)}
                  column={3}
                />
              ))}
            </CardContainer>
            <InteractiveModel />
            <Button onPress={this.nextStep} label="Proceed" />
        </React.Fragment>
    );
  }
}

export default PickClassStep;

const CardContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-between;
    marginTop: ${ utils.GUTTER };
`