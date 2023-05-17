import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';
const Data = [
  {
    id: 1,
    name: 'Orange',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    url: require('../Images/orange.jpg'),
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
    // url: require('../Images/'),
  },
  {
    id: 3,
    name: 'Berry',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/fruits1.jpg'),
  },
  {
    id: 4,
    name: 'Kiwi',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/kiwi.jpg'),
  },
  {
    id: 5,
    name: 'Lemon',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/lemon.jpg'),
  },
  {
    id: 6,
    name: 'Strawberries',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/strawberries.jpg'),
  },
];
export default class VerticalFlatList extends Component {
  renderListItemsMenu = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginHorizontal: 10,
        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').height / 4,
        // backgroundColor: '#fff',
        // backgroundColor: '#fff',
        // borderRadius: 20,
        // shadowColor: 'black',
        // elevation: 5,
      }}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 30,
          shadowColor: 'black',
          elevation: 10,

          width: Dimensions.get('screen').width / 2.4,
          height: Dimensions.get('screen').height / 4.9,
        }}>
        <Image
          style={{
            // marginTop: 10,
            alignSelf: 'center',
            borderRadius: 20,
            width: Dimensions.get('screen').width / 2.5,
            height: Dimensions.get('screen').height / 5,
            // marginBottom: 3,
          }}
          source={item.url}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          width: Dimensions.get('screen').width / 2.4,
          shadowColor: 'black',
          elevation: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(12, 580),
            color: 'black',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',
            fontFamily: 'Alkatra-Regular',
            fontSize: RFValue(10, 580),
            color: 'black',
          }}>
          {item.tag}
        </Text>
      </View>
    </View>
  );
  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          key={'#'}
          keyExtractor={item => {
            '#' + item.id;
          }}
          data={Data}
          numColumns={2}
          renderItem={
            this.renderListItemsMenu
            // this.state.toogle_categories
            //   ? this.renderListItems
            //   : this.renderListItemsMenu
          }
        />
      </View>
    );
  }
}
