import React, { Component } from "react";
import styled from 'styled-components';

import Button from "~/components/Base/Button";

import { utils, colors } from '~/styles';

import { HeroService as _heroService } from '~/services/HeroService';

export default class OverviewStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      character: "",
      characterClass: "",
    };
  }

  componentDidMount() {
    const { character } = this.state;

    this.getClass(character.class)
      .then(res => {
        this.setState({
          characterClass: res.name,
        });
      });
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep, getState } = props;

    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
      character: getState(),
    };
  };
  
  getClass = async () => {
    const { character } = this.state;
    const { data } = await _heroService.getCharacterClassById(character.class);
    return data;
  }

  render() {
    const { character, characterClass, isLoading } = this.state;
    
    return (
        <React.Fragment>
            <Container>
              <Label>Name</Label>
              <Value>{character.name}</Value>
              <Label>Gender</Label>
              <Value>{character.gender ? 'Female' : 'Male'}</Value>
              <Label>Class</Label>
              <Value>{characterClass}</Value>
            </Container>
            <Button onPress={this.props.next} label="Finish" />
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