import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';

import {mutationHandler} from '../utils/graphql';

export default class UserInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "No Name",
      clicks: props.data ? props.data.clicks : 0
    };
  }

  onClick = () => {
    console.log("onClick one time");
    if (this.props.onClick) {
      mutationHandler(this.props.onClick, "onClick", (data) => {
        console.log("onClick", data);
        console.log("data.onClick", data.onClick);
        if (data.onClick) {
          this.setState({clicks: data.onClick});
        }
      });
    } else {
      console.warn("no onClick function!");
    }
  }

  onQueryName = () => {
    console.log("onQueryName", this.props.data);

    this.props.data.refetch().then((data) => {
      console.log("refertch data:", data);
      if(data.name) {
        this.setState({name: data.name});
      }
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("nextProps", nextProps);
    if (nextProps.data) {
      const {clicks, name} = nextProps.data;
      this.setState({clicks, name});
    }
  }

  render() {
    const clicks = this.state.clicks;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Clicked {clicks} times.
                </Text>
                <Button onPress={this.onClick}><Text>Click</Text></Button>
                <Button onPress={this.onQueryName}><Text>{this.state.name}</Text></Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
