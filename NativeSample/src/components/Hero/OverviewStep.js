import React, { Component } from "react";
import styled from 'styled-components';

import Button from "~/components/Base/Button";
import Header from "~/components/Header";

import { utils, colors } from '~/styles';

import { HeroService as _heroService } from '~/services/HeroService';

export default class OverviewStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      character: "",
    };
  }
  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep, getState } = props;

    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
      character: getState(),
    };
  };

  // Move to previous step
  previousStep = () => {
    this.props.back();
  }

  // Move to next step
  nextStep = () => {
    this.props.next();
  }

  render() {
    const { character } = this.state;
    console.log(character);
    return (
        <React.Fragment>
            <Header 
              title={'Your hero'}
              onBack={this.previousStep}
            />
            <Container>
              <Label>Name</Label>
              <Value>{character.name}</Value>
              <Label>Gender</Label>
              <Value>{character.gender ? 'Female' : 'Male'}</Value>
              <Label>Class</Label>
              <Value>{character.class.name}</Value>
            </Container>
            <Button onPress={this.nextStep} label="Finish" />
        </React.Fragment>
    );
  }
}

const Container = styled.ScrollView.attrs({
    contentContainerStyle:  {
        flexGrow: 1,
    }
})`
    background-color: ${ colors.PRIMARY_COLOR };
`

const Label = styled.Text`
    marginTop: ${ utils.GUTTER };
    color: ${ colors.WHITE };
    fontWeight: bold;
    textTransform: uppercase;
`

const Value = styled.Text`
  color: ${ colors.PLACEHOLDER_COLOR }
`