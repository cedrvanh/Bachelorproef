import React, { Component } from "react";
import styled from 'styled-components';

import InteractiveModel from "~/components/Hero/InteractiveModel";
import Button from "~/components/Base/Button";
import SelectedCard from "~/components/SelectedCard";
import Header from "~/components/Header";
import LoadingIndicator from "~/components/LoadingIndicator";

import { HeroService as _heroService } from "~/services/HeroService";
import { handleError } from "~/services/api";

import { utils } from '~/styles';

export default class PickClassStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      characterClasses: [],
      selectedClass: [],
      isLoading: true,
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
  
  // Go to next step
  nextStep = () => {
    // Save MultiStep state - different from component state
    this.props.saveState({
      class: this.state.selectedClass
    })
    this.props.next();
  };

  // Move to previous step
  previousStep = () => {
    this.props.back();
  }

  getClasses = async () => {
    try {
      const { data } = await _heroService.getCharacterClasses();
      this.setState(prevState => ({
        ...prevState,
        characterClasses: data,
        selectedClass: data[2],  // Assign first class for active card state
        isLoading: false
      }));
    } catch (err) {
      handleError(err);
    }
  }

  selectClass = (characterClass) => {
    this.setState(prevState => ({
      ...prevState,
      selectedClass: characterClass
    }))
  }

  render() {
    const { characterClasses, selectedClass, isLoading } = this.state;
    return (
        <React.Fragment>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <React.Fragment>
                <Header 
                  title={'Pick your class'}
                  onBack={this.previousStep}
                />
                <CardContainer>
                  {characterClasses && characterClasses.map((characterClass) => (
                    <SelectedCard 
                      column={3}
                      key={characterClass.id}
                      value={characterClass.name}
                      selected={selectedClass.id === characterClass.id}
                      onPress={() => this.selectClass(characterClass)}
                    />
                  ))}
                </CardContainer>
                <InteractiveModel model={selectedClass} />
                <Button onPress={this.nextStep} label="Proceed" />
            </React.Fragment>
          )}
        </React.Fragment>
    );
  }
}

const CardContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    justifyContent: space-between;
    margin: ${ utils.GUTTER } 0; 
`