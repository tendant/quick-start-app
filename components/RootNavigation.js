import React from 'react';
import { StackNavigator } from 'react-navigation';

import RootTabs from './RootTabs';
import CameraRecordDetailContainer from './CameraRecordDetailContainer';

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
      return (<CameraRecordDetailContainer
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
