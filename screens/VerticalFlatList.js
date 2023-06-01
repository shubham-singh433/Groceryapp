import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';

export default class VerticalFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: [],
      isloading: true,
    };
  }
  // componentDidMount() {
  //   this.fetch_category();
  // }
  // fetch_category = () => {
  //   fetch(global.api_key + 'get-jwellery-category-web', {
  //     method: 'GET',
  //     // body: JSON.stringify({}),
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       if (json.status) {
  //         this.setState({
  //           more: json.categorie,
  //         });
  //         console.warn(this.state.more);
  //       } else {
  //         this.setState({
  //           more: [],
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.warn(error);
  //     })
  //     .finally(() => {
  //       this.setState({
  //         isloading: false,
  //       });
  //     });
  // };
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
          source={{uri: global.img_url + item.img_link}}
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
        {/* <Text
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',
            fontFamily: 'Alkatra-Regular',
            fontSize: RFValue(10, 580),
            color: 'black',
          }}>
          {item.price}
        </Text> */}
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
          data={this.state.more}
          numColumns={2}
          renderItem={this.renderListItemsMenu}
        />
      </View>
    );
  }
}
