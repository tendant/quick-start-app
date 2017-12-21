import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import UserInformationContainer from './UserInformationContainer';
import CameraRecord from './CameraRecord';

export default class RootTabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs tabBarPosition="bottom" >
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <CameraRecord />
          </Tab>
          <Tab heading={ <TabHeading><Text>User</Text></TabHeading>}>
            <UserInformationContainer />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Text>apps</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
