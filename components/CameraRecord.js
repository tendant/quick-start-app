import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';

import {mutationHandler} from '../utils/graphql';

export default class CameraRecord extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Camera is here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
