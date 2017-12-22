import React, { Component } from 'react';
import get from 'lodash/get';
import { Dimensions, View } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, SwipeRow, Left, Title, Body, Right, Separator } from 'native-base';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

var dp = new DataProvider((r1, r2) => {return r1 !== r2;});

export default class CameraRecordDetail extends Component {
  constructor(props) {
    super(props);
    const cameraData = !!props.cameraData ? props.cameraData : [];
    this.state = {
      dataProvider: dp.cloneWithRows(cameraData)
    };
    this._layoutProvider = new LayoutProvider((i) => {
                              let d = this.state.dataProvider.getDataForIndex(i);
                              return "CAMERA";
                            }, (type, dim) => {
                              const {width} = Dimensions.get("window");
                              switch (type) {
                                case "CAMERA":
                                  dim.width = width;
					                        dim.height = 50;
                                  break;
                                default:
                                  dim.width = width;
                                  dim.height = 0;
                              }
                            });
  }

  componentWillReceiveProps(nextProps) {
    if(get(nextProps, "cameraData.length") !== get(this.props, "cameraData.length")) {
      this.setState({
        dataProvider: dp.cloneWithRows(nextProps.cameraData)
      })
    }
  }

  // deleteRow(secId, rowId, rowMap) {
  //   rowMap[`${secId}${rowId}`].props.closeRow();
  //   const newData = [...this.state.listViewData];
  //   newData.splice(rowId, 1);
  //   this.setState({ listViewData: newData });
  // }

  _renderRow = (type, data, index) => {
    switch (type) {
      case "CAMERA":
        return (
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Add')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <Body >
                <ListItem button onPress={() => alert(`${data}`)} >
                  <Text>{get(data, "name", "N/A")}</Text>
                </ListItem>
              </Body>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        )
      default:
        return (<Text >no data</Text>)
    }
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
            <Title>Camera List</Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1}} >
    			<RecyclerListView rowRenderer={this._renderRow}
    												dataProvider={this.state.dataProvider}
                            layoutProvider={this._layoutProvider}
                            disableRecycling={false}
          />
    		</View>
      </Container>
    );
  }
}
