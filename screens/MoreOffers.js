import React, {Component} from 'react';
import {FlatList, View, Image, Dimensions, Text, Pressable} from 'react-native';
import {Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'react-native-elements';

export default class MoreOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: [],
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
            more: json.data,
          });
          // console.warn(this.state.more);
        } else {
          this.setState({
            more: [],
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
            fontSize: RFValue(12, 580),
            marginLeft: 10,
            color: 'black',
          }}>
          {item.name}
        </Text>
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
          source={{uri: global.img_url + item.img_link}}
        />
      </View>
    </View>
  );
  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.more}
          renderItem={this.renderListItems}
        />
      </View>
    );
  }
}
