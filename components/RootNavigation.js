import React from 'react';
import { StackNavigator } from 'react-navigation';

import RootTabs from './RootTabs';
import CameraRecordDetail from './CameraRecordDetail';

const RootNavigation = StackNavigator({
  Home: {
    screen: (props) => {
      const {screenProps, navigation} = props;
      return (<RootTabs
                {...screenProps}
                navigation={navigation} />);
    },
  },

  CameraRecordDetail:{
    screen: (props) => {
      const {screenProps, navigation} = props;
      return (<CameraRecordDetail
                {...screenProps}
                {...navigation.state.params}
                navigation={navigation} />);
    }
  },

},
{
  headerMode: 'none',
}
);

export default RootNavigation;
