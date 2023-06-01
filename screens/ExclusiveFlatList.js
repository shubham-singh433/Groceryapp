import React, {Component} from 'react';
import {FlatList, View, Image, Dimensions, Text, Pressable} from 'react-native';
import {Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';

// const Data = [
//   {
//     id: 1,
//     name: 'Orange',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     url: require('../Images/orange.jpg'),
//     price: '140 ₹',
//     text: 'Fresh and natural ',
//     color: '#f2962c',

//     // price: '120 ₹',
//     // url:require('../Images/avocado')
//   },
//   {
//     id: 2,
//     name: ' Pomogranate',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     price: '120 ₹',
//     url: require('../Images/pomegranate.jpg'),
//     text: 'Fresh and natural ',
//     color: '#cf4836',
//     // url: require('../Images/'),
//   },
//   {
//     id: 3,
//     name: 'Berry',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     price: '120 ₹',
//     url: require('../Images/fruits1.jpg'),
//     text: 'Fresh and natural ',
//     color: '#893fab',
//   },
//   {
//     id: 4,
//     name: 'Kiwi',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     price: '120 ₹',
//     url: require('../Images/kiwi.jpg'),
//     text: 'Fresh and natural ',
//     color: '#4fe86b',
//   },
//   {
//     id: 5,
//     name: 'Lemon',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     price: '120 ₹',
//     url: require('../Images/lemon.jpg'),
//     text: 'Fresh and natural ',
//     color: '#f7e136',
//   },
//   {
//     id: 6,
//     name: 'Strawberries',
//     tag: 'fruit & vegetable',
//     qunat: '1 kg',
//     price: '120 ₹',
//     url: require('../Images/strawberries.jpg'),
//     text: 'Fresh and natural ',
//     color: '#d14558',
//   },
// ];
export default class ExclusiveFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exclusive: [],
      isloading: true,
    };
  }
  componentDidMount() {
    this.fetch_category();
  }
  fetch_category = () => {
    fetch(global.api_key + 'get-jwellery-category-web', {
      method: 'GET',
      // body: JSON.stringify({}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        if (json.status) {
          this.setState({
            exclusive: json.data,
          });
          console.warn(this.state.exclusive);
        } else {
          this.setState({
            exclusive: [],
          });
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .finally(() => {
        this.setState({
          isloading: false,
        });
      });
  };
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
          height: Dimensions.get('screen').width / 2.5,
          shadowColor: 'black',
          elevation: 5,
          borderWidth: 0.5,
          // borderColor: item.color,
          // height: Dimensions.get('screen').height / 8,
          // width: Dimensions.get('screen').width / 2.3,

          // alignContent: 'center',
        }}>
        <Image
          source={{uri: global.img_url + item.img_link}}
          style={{
            alignSelf: 'center',
            // margin: 10,
            width: Dimensions.get('screen').width / 2.7,
            height: Dimensions.get('screen').height / 7.6,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            fontSize: RFValue(11, 580),
            textAlign: 'center',
            fontFamily: 'PTSans-Regular',
            color: 'black',
          }}>
          {item.name}
        </Text>
        {/* <Text
          style={{
            fontSize: RFValue(12, 580),
            // textAlign: 'center',
            fontFamily: 'PTSans-Bold',
            color: 'green',
          }}>
          {item.price}
        </Text> */}
        {/* <View
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
            {item.type}
          </Text>
        </View> */}
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
            }}></View>
          <View
            style={{
              alignItems: 'center',
              // backgroundColor: 'red',
              paddingLeft: 5,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.exclusive}
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
