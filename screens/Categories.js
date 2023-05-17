import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CheckBox, Header, Icon} from 'react-native-elements';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const Data = [
  {
    id: 1,
    name: 'Orange',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    url: require('../Images/orange.jpg'),
    price: '140 ₹',
    text: 'Fresh and natural ',

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
    // url: require('../Images/'),
  },
  {
    id: 3,
    name: 'Berry',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/fruits.jpg'),
    text: 'Fresh and natural ',
  },
  {
    id: 4,
    name: 'Kiwi',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/kiwi.jpg'),
    text: 'Fresh and natural ',
  },
  {
    id: 5,
    name: 'Lemon',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/lemon.jpg'),
    text: 'Fresh and natural ',
  },
  {
    id: 6,
    name: 'Strawberries',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/strawberries.jpg'),
    text: 'Fresh and natural ',
  },
];
export default class Categories extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
