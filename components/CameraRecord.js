import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';

import {mutationHandler} from '../utils/graphql';

export default class CameraRecord extends Component {

  constructor(props) {
    super(props);
  }

  onCameraDetail = () => {
    const {navigation} = this.props;
    navigation && navigation.navigate('CameraRecordDetail', {
      cameraType: "GH5",
      goBack: this.onBack
    });
  }

  onBack = () => {
    const {navigation} = this.props;
    navigation && navigation.goBack(null);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Button onPress={this.onCameraDetail}><Text>Camera is here</Text></Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
