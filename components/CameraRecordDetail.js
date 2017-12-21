import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, SwipeRow, Left, Title, Body, Right, Separator } from 'native-base';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

var dp = new DataProvider((r1, r2) => {return r1 !== r2;});
const datas = [
  'GH5',
  'A7RIII',
  '7D II',
  'D850',
  'A6300',
  'A6500',
  'X100f',
  'XT2',
];
export default class CameraRecordDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: dp.cloneWithRows(datas)
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
                  <Text>{data}</Text>
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
