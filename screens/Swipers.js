import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {Icon} from 'react-native-elements';

import {RFValue} from 'react-native-responsive-fontsize';
class Swipers extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: ['rgb(238, 63, 76)', '#2AC07E', '#736C8A'],
  //     pointer: 1,
  //   };
  // }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        showsPagination={true}
        paginationStyle={{
          marginBottom: 150,
          // paddingLeft: -100,
          paddingLeft: 50,
          justifyContent: 'flex-start',
        }}
        nextButton={
          <View
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              bottom: -240,
            }}>
            <Icon
              name="arrow-forward-circle"
              type="ionicon"
              // color={this.state.color[this.state.pointer]}
              color={'rgb(238, 63, 76)'}
              size={50}
            />
          </View>
        }
        prevButton={<View></View>}
        onIndexChanged={index => {
          if (index == 2) {
            this.props.navigation.navigate('CreateNew');
          }
          console.log(index);
        }}
        // onIndexChanged={index => {
        //   console.log(index);
        //   console.log(color(this.state.color[index]));
        //   this.setState({
        //     pointer: index,
        //   });
        // }}
        // activeDotColor={this.state.color[this.state.pointer]}
        // activeDotStyle={{width: 15, height: 8}}
        // dotColor={this.state.color[this.state.pointer]}
        activeDotColor="rgb(238, 63, 76)"
        activeDotStyle={{width: 15, height: 8}}
        dotColor="grey">
        <View style={styles.slide1}>
          <View
            style={{
              borderRadius: 400,
              // backgroundColor: '#FCEAEC',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,

              backgroundColor: 'rgb(238, 63, 76)',
              width: Dimensions.get('screen').width / 1.4,
              height: Dimensions.get('screen').height / 3.2,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 60,
              opacity: 0.2,
            }}
          />
          <View
            style={{
              // #FCEAEC
              borderRadius: 400,
              // backgroundColor: '#F9B6BD',\
              // backgroundColor: '#EE3F4C',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              backgroundColor: 'rgb(238, 63, 76)',
              width: Dimensions.get('screen').width / 1.6,
              height: Dimensions.get('screen').height / 3.7,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 77,
              opacity: 0.7,
            }}
          />
          <View
            style={{
              borderRadius: 400,

              // backgroundColor: '#EE3F4C',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              backgroundColor: 'rgb(238, 63, 76)',
              width: Dimensions.get('screen').width / 2,
              height: Dimensions.get('screen').height / 4.4,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 95,
              opacity: 1,
            }}>
            <Image
              source={require('../Images/SwiperImage/store.png')}
              style={{
                width: 110,
                height: 110,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 120,
              // // marginBottom: '-50%',
              // paddingBottom: '50%',
              // backgroundColor: 'pink',
            }}>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                color: 'rgb(238, 63, 76)',
                fontWeight: 'bold',
                fontSize: RFValue(20, 580),
              }}>
              Find Your Nearby
            </Text>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                color: 'rgb(238, 63, 76)',
                fontWeight: 'bold',
                fontSize: RFValue(20, 580),
              }}>
              Grocery Store
            </Text>
            <Text
              style={{
                fontSize: RFValue(14, 580),
                fontWeight: '600',
                // justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 15,
                color: 'black',
              }}>
              Find the favourite stores you want by your locations or
              Neighbourhood
            </Text>
          </View>
          {/* <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Icon
              name="arrow-forward-circle"
              type="ionicon"
              // color={this.state.color[this.state.pointer]}
              color="rgb(238, 63, 76)"
              size={50}
            />
          </View> */}
        </View>
        <View style={styles.slide2}>
          <View
            style={{
              borderRadius: 400,
              backgroundColor: '#FCEAEC',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,

              backgroundColor: '#2AC07E',
              width: Dimensions.get('screen').width / 1.4,
              height: Dimensions.get('screen').height / 3.2,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 60,
              opacity: 0.2,
            }}
          />
          <View
            style={{
              // #FCEAEC
              borderRadius: 400,
              // backgroundColor: '#F9B6BD',\
              backgroundColor: '#2AC07E',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              width: Dimensions.get('screen').width / 1.6,
              height: Dimensions.get('screen').height / 3.7,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 77,
              opacity: 0.7,
            }}
          />
          <View
            style={{
              borderRadius: 400,

              backgroundColor: '#2AC07E',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              width: Dimensions.get('screen').width / 2,
              height: Dimensions.get('screen').height / 4.4,
              justifyContent: 'center',
              alignContent: 'center',
              position: 'absolute',
              top: 95,
              opacity: 1,
            }}>
            <Image
              source={require('../Images/SwiperImage/groceries.png')}
              style={{
                left: 60,
                width: 110,
                height: 110,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 120,
            }}>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                // backgroundColor: '#EE3F4C',
                fontWeight: 'bold',
                fontSize: RFValue(20, 580),
                color: '#2AC07E',
              }}>
              Offers Fresh & Qulaity
            </Text>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                color: '#EE3F4C',
                fontWeight: 'bold',
                fontSize: RFValue(20, 580),
                color: '#2AC07E',
              }}>
              Groceries for you
            </Text>
            <Text
              style={{
                fontSize: RFValue(14, 580),
                fontWeight: '600',
                // justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 15,
                color: 'black',
              }}>
              All Items have real freshness and are intended for your needs
            </Text>
          </View>
          {/* <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Icon
              name="arrow-forward-circle"
              type="ionicon"
              // color={this.state.color[this.state.pointer]}
              color={'#2AC07E'}
              size={50}
            />
          </View> */}
        </View>
        <View style={styles.slide3}>
          <View
            style={{
              borderRadius: 400,
              backgroundColor: '#736C8A',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              // backgroundColor: '#EE3F4C',
              width: Dimensions.get('screen').width / 1.4,
              height: Dimensions.get('screen').height / 3.2,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 60,
              opacity: 0.2,
            }}
          />
          <View
            style={{
              // #FCEAEC
              borderRadius: 400,
              // backgroundColor: '#F9B6BD',\
              // backgroundColor: '#EE3F4C',
              backgroundColor: '#736C8A',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              width: Dimensions.get('screen').width / 1.6,
              height: Dimensions.get('screen').height / 3.7,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              position: 'absolute',
              top: 77,
              opacity: 0.7,
            }}
          />
          <View
            style={{
              borderRadius: 400,

              // backgroundColor: '#EE3F4C',
              // backgroundColor: `${this.state.color[this.state.pointer]}`,
              backgroundColor: '#736C8A',
              width: Dimensions.get('screen').width / 2,
              height: Dimensions.get('screen').height / 4.4,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 95,
              opacity: 1,
            }}>
            <Image
              source={require('../Images/SwiperImage/vegetable.png')}
              style={{
                alignSelf: 'center',
                width: 130,
                height: 130,
              }}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
              paddingTop: 120,
            }}>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                color: '#736C8A',
                fontWeight: 'bold',
                fontSize: 28,
              }}>
              Quick Delivery at your
            </Text>
            <Text
              style={{
                // color: `${this.state.color[this.state.pointer]}`,
                color: '#736C8A',
                fontWeight: 'bold',
                fontSize: 28,
              }}>
              Doorstep
            </Text>
            <Text
              style={{
                fontSize: RFValue(14, 580),
                fontWeight: '600',
                // justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 15,
                color: 'black',
              }}>
              Choose delivery to be delivered or pickup according to when you
              need
            </Text>
          </View>
          {/* <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Icon
              name="arrow-forward-circle"
              type="ionicon"
              // color={this.state.color[this.state.pointer]}
              color="#736C8A"
              size={50}
            />
          </View> */}
        </View>
      </Swiper>
    );
  }
}
export default Swipers;
const styles = StyleSheet.create({
  wrapper: {backgroundColor: 'white'},
  slide1: {
    flex: 1,
    // width: Dimensions.get('screen').width / 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  slide3: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
