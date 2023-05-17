import React, {Component} from 'react';
import {FlatList, View, Image, Dimensions, Text, Pressable} from 'react-native';
import {Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';
const Data = [
  {
    id: 1,
    name: 'Orange',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    url: require('../Images/orange.jpg'),
    price: '140 ₹',
    text: 'Fresh and natural ',
    color: '#f2962c',

    // price: '120 ₹',
    // url:require('../Images/avocado')
  },
  {
    id: 2,
    name: 'Pomogranate',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/pomegranate.jpg'),
    text: 'Fresh and natural ',
    color: '#cf4836',
    // url: require('../Images/'),
  },
  {
    id: 3,
    name: 'Berry',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/fruits1.jpg'),
    text: 'Fresh and natural ',
    color: '#893fab',
  },
  {
    id: 4,
    name: 'Kiwi',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/kiwi.jpg'),
    text: 'Fresh and natural ',
    color: '#4fe86b',
  },
  {
    id: 5,
    name: 'Lemon',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/lemon.jpg'),
    text: 'Fresh and natural ',
    color: '#f7e136',
  },
  {
    id: 6,
    name: 'Strawberries',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/strawberries.jpg'),
    text: 'Fresh and natural ',
    color: '#d14558',
  },
];
export default class MoreOffers extends Component {
  renderListItems = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingTop: 20,
        marginHorizontal: 15,
        marginTop: 10,
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').height / 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
      }}>
      <View
        style={{
          width: Dimensions.get('screen').width / 1.8,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',

          //   backgroundColor: 'blue'
        }}>
        <Text
          style={{
            fontFamily: 'PTSans-Bold',
            fontSize: RFValue(15, 580),
            marginLeft: 10,
            color: 'black',
          }}>
          {item.text}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'PTSans-Bold',
            fontSize: RFValue(13, 580),
            marginLeft: 10,
            color: 'black',
          }}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'PTSans-Bold',
              fontSize: RFValue(11, 580),
              marginLeft: 10,
              color: 'red',
            }}>
            {item.price} /
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'PTSans-Bold',
              fontSize: RFValue(11, 580),
              marginLeft: 5,
              color: 'green',
            }}>
            {item.qunat}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          // borderWidth: 2,
          // borderColor: item.color,
          // borderRadius: 15,
        }}>
        <Image
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            // backgroundColor: 'blue',
            width: Dimensions.get('screen').width / 2.9,
            height: Dimensions.get('screen').height / 8.6,
            borderWidth: 0.9,
            borderColor: item.color,
          }}
          source={item.url}
        />
      </View>
    </View>
  );
  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={this.renderListItems}
        />
      </View>
    );
  }
}
