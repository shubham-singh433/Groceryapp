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
    name: ' Pomogranate',
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
export default class ExclusiveFlatList extends Component {
  flatlistHorizontal = ({item}) => (
    <Pressable
      onPress={() => {
        this.props.navigation.navigate('FoodScreen');
      }}>
      <View
        style={{
          // justifyContent: 'space-evenly',
          padding: 2,
          backgroundColor: 'white',
          margin: 8,
          borderRadius: 20,
          alignItems: 'center',
          // marginHorizontal: 5,
          width: Dimensions.get('screen').width / 2.6,
          shadowColor: 'black',
          elevation: 5,
          borderWidth: 3,
          borderColor: item.color,
          // height: Dimensions.get('screen').height / 8,
          // width: Dimensions.get('screen').width / 2.3,

          // alignContent: 'center',
        }}>
        <Image
          source={item.url}
          style={{
            alignSelf: 'center',
            // margin: 10,
            width: Dimensions.get('screen').width / 2.9,
            height: Dimensions.get('screen').height / 8,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            fontSize: RFValue(14, 580),
            textAlign: 'center',
            fontFamily: 'PTSans-Bold',
            color: 'black',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: RFValue(12, 580),
            // textAlign: 'center',
            fontFamily: 'PTSans-Bold',
            color: 'green',
          }}>
          {item.price}
        </Text>
        <View
          style={{
            // justifyContent: 'flex-start',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(11, 580),
              textAlign: 'center',
              // color: 'green',
              color: 'black',

              fontFamily: 'PTSans-Bold',

              // color: 'black',
            }}>
            {item.text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
  render() {
    return (
      <View>
        <View>
          {/*  for text and button of popular */}
          <View
            style={{
              paddingTop: 10,

              // padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <View style={{alignContent: 'flex-end'}}>
              <Pressable
                onPress={() => {
                  this.props.navigation.navigate('Categorie');
                }}
                style={{
                  backgroundColor: 'white',
                  width: Dimensions.get('screen').width / 5.4,
                  height: Dimensions.get('screen').width / 10,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  // alignContent: 'center',
                  // alignSelf: 'center',
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    // alignContent
                    // justifyContent: 'flex-end',
                    fontSize: RFValue(15, 580),
                    fontFamily: 'Alkatra-Bold',
                    color: 'black',
                  }}>
                  All
                </Text>
                <Icon name="arrow-forward-outline" type="ionicon" />
              </Pressable>
            </View> */}
          </View>
          <View
            style={{
              alignItems: 'center',
              // backgroundColor: 'red',
              paddingLeft: 5,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={Data}
              renderItem={this.flatlistHorizontal}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>
      </View>
    );
  }
}
