import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Left, Icon, Title, Right } from 'native-base';

import {mutationHandler} from '../utils/graphql';

export default class CameraRecordDetail extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.goBack}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Camera Detail</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   {this.props.cameraType}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
