import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Dimensions} from 'react-native';
import {SwiperFlatList, showPagination} from 'react-native-swiper-flatlist';
// const Data = [
//   {
//     id: 1,
//     url: require('../Images/Banners.png'),
//   },
//   {
//     id: 2,
//     url: require('../Images/Banners2.png'),
//   },
// ];
class SwiperImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [],
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
        if (json.status) {
          this.setState({
            banner: json.slider,
          });
        } else {
          this.setState({
            banner: [],
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

  renderItemlist = ({item}) => (
    <View
      style={{
        marginRight: 4,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Image
        source={{uri: global.img_url + item.link}}
        style={{
          width: Dimensions.get('screen').width / 1.06,
          height: Dimensions.get('screen').height / 5,
          borderRadius: 20,
        }}
      />
    </View>
  );
  render() {
    return (
      <View>
        <View
          style={{
            width: Dimensions.get('screen').width / 1.03,
            alignItems: 'center',
            alignSelf: 'center',
            // backgroundColor: 'red',
            // height: Dimensions.get('screen').height / 5,
          }}>
          <SwiperFlatList
            // showsHorizontalScrollIndicator={false}
            data={this.state.banner}
            renderItem={this.renderItemlist}
            autoplay
            autoplayDelay={2}
            keyExtractor={item => item.id}
            showPagination
            autoplayLoop
            paginationStyle={{marginBottom: 10}}
            paginationActiveColor="red"
            paginationDefaultColor="white"
            paginationStyleItem={{
              width: 10,
              height: 10,
              borderRadius: 5,
              shadowColor: 'black',
              elevation: 5,
            }}
          />
        </View>
      </View>
    );
  }
}

export default SwiperImages;
