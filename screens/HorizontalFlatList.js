import React, {Component} from 'react';
import {FlatList, View, Image, Dimensions, Text, Pressable} from 'react-native';
import {Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
// const Data = [
//   {
//     id: 1,
//     url: require('../Images/beverages.png'),
//     name: 'Beverages',
//     color: '#f2962c',
//   },
//   {
//     id: 2,
//     url: require('../Images/dairy.png'),
//     name: 'Dairy',
//     color: '#cf4836',
//   },
//   {
//     id: 3,
//     url: require('../Images/fruits.png'),
//     name: 'Fruits',
//     color: '#893fab',
//   },
//   {
//     id: 4,
//     url: require('../Images/groceries.png'),
//     name: 'Groceries',
//     color: '#4fe86b',
//   },
//   {
//     id: 5,
//     url: require('../Images/personalcare.png'),
//     name: 'Personalcare',
//     color: '#f7e136',
//   },
//   {
//     id: 6,
//     url: require('../Images/snacks.png'),
//     name: 'snacks',
//     color: '#d14558',
//   },
//   {
//     id: 7,
//     url: require('../Images/staples.png'),
//     name: 'Staples',
//     color: '#4edec1',
//   },
// ];
export default class HorizontalFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: [],
      isloading: true,
    };
  }
  componentDidMount() {
    this.fetch_category();
  }

  fetch_category = () => {
    fetch(global.api_key + 'fetch-home-data-web', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        // console.warn('data', json);
        if (json.status) {
          this.setState({
            featured: json.category,
          });
        } else {
          this.setState({
            featured: [],
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isloading: false,
        });
      });
  };
  flatlistHorizontal = ({item}) => (
    <View
      style={{
        marginTop: '6%',
        width: Dimensions.get('screen').width / 4.29,
        height: Dimensions.get('screen').height / 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={() =>
          this.props.navigation.navigate('Products', {link: item.link})
        }>
        <View
          style={{
            borderWidth: 1,
            width: Dimensions.get('screen').width / 5,
            height: Dimensions.get('screen').height / 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 5,
            borderRadius: 15,
          }}>
          <Image
            source={{uri: global.img_url + item.image}}
            style={{
              width: '80%',
              height: '60%',
            }}
          />
        </View>
      </Pressable>

      <Text
        style={{
          fontSize: RFValue(9, 580),
          fontFamily: 'PTSans-Bold',
          color: 'black',
        }}>
        {item.name}
      </Text>
    </View>
  );
  render() {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: 'red',
            marginHorizontal: '3%',
            // alignSelf: 'center',
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={this.state.featured}
            renderItem={this.flatlistHorizontal}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}
