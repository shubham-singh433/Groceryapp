import React, {Component} from 'react';
import {View} from 'react-native';
import {Dimensions, Text, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
const Data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
];
class OrderHistory extends Component {
  renderListItems = ({item}) => (
    <View
      style={{
        width: Dimensions.get('screen').width / 1,
        height: Dimensions.get('screen').height / 8,
        backgroundColor: '#fff',
        // marginVertical: 5,
        borderBottomWidth: 2,
        borderColor: 'black',
        // paddingTop: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          marginHorizontal: 20,
          //   backgroundColor: 'green',
        }}>
        <View
          style={{
            width: Dimensions.get('screen').width / 8,
            height: Dimensions.get('screen').height / 18,
            backgroundColor: '#f7963b',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Icon name="hourglass-outline" type="ionicon" size={28} />
        </View>
        <View
          style={{
            width: Dimensions.get('screen').width / 2.1,
            height: Dimensions.get('screen').height / 14,
            // backgroundColor: 'pink',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: RFValue(14, 580),
                fontFamily: 'PTSans-Bold',
                textAlign: 'left',
                // paddingHorizontal: 10,
              }}>
              Order #1234
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: RFValue(12, 580),
                fontFamily: 'PTSans-Bold',
                textAlign: 'left',
                // paddingHorizontal: 10,
              }}>
              04-Apr-23 06:56 PM
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: RFValue(12, 580),
                fontFamily: 'PTSans-Bold',
                textAlign: 'left',
                // paddingHorizontal: 10,
              }}>
              Delivered
            </Text>
          </View>
        </View>
        <View
          style={{
            // justifyContent: 'flex-end',
            width: Dimensions.get('screen').width / 3,
            height: Dimensions.get('screen').height / 16,
            // backgroundColor: 'red',
            // alignItems: 'flex-end',
            alignItems: 'flex-end',
            paddingTop: 6,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: RFValue(14, 580),
              fontFamily: 'PTSans-Bold',
              textAlign: 'left',
              //   justifyContent: 'flex-end',
              //   alignContent: 'flex-end',
              //   alignItems: 'flex-end',
              // paddingHorizontal: 10,
            }}>
            ₹ 7045.57
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          //   backgroundColor: 'blue',
          width: Dimensions.get('screen').width / 1,
          height: Dimensions.get('screen').height / 18,
          justifyContent: 'flex-end',
          paddingBottom: 3,
          paddingRight: 4,
        }}>
        <View
          style={{
            width: Dimensions.get('screen').width / 3.8,
            height: Dimensions.get('screen').height / 23,
            borderRadius: 10,
            backgroundColor: '#f7963b',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 10,
          }}>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('OrderDetails');
            }}>
            <Text
              style={{
                fontSize: RFValue(13, 580),
                fontFamily: 'PTSans-Bold',
                color: '#fff',
              }}>
              View Details
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1, marginBottom: 10}}>
        <View style={{alignSelf: 'center', marginBottom: 150}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={this.renderListItems}
          />
        </View>
      </View>
    );
  }
}
export default OrderHistory;
