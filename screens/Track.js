import React, {Component} from 'react';
import {View, Image, Text, Dimensions, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import MoreOffers from './MoreOffers';

class Track extends Component {
  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <Pressable
          onPress={() => {
            this.props.navigation.navigate('Orders');
          }}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            size={25}
            color={'white'}
          />
        </Pressable>

        <Text
          style={{
            paddingLeft: 10,
            color: 'white',
            fontSize: RFValue(14, 580),
            fontFamily: 'PTSans-Bold',
          }}>
          Order #1234
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{
            backgroundColor: '#f7963b',

            borderRadius: 20,
            // paddingHorizontal: 0,
          }}
        />
        <ScrollView>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              //   height: Dimensions.get('screen').height / 8,
              // backgroundColor: 'red',
              //   alignItems: 'center',
              alignItems: 'flex-start',
              marginLeft: 10,
              justifyContent: 'space-around',
              borderBottomWidth: 0.5,
              paddingBottom: 20,
              marginVertical: 30,
              // borderTopWidth: 0.5,
            }}>
            <Text
              style={{
                fontSize: RFValue(16, 580),
                fontFamily: 'PTSans-Bold',
                // textAlign: 'justify',
                color: 'black',
                marginLeft: 10,
              }}>
              Estimated Delivery
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <Icon name="calendar" type="ionicon" size={30} />
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'justify',
                  color: 'black',
                  marginLeft: 20,
                }}>
                May 5 , 2023
              </Text>
            </View>
            <View
              style={{
                width: Dimensions.get('screen').width / 1.4,
                height: Dimensions.get('screen').height / 20,
                borderRadius: 15,
                backgroundColor: '#f0ca7f',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Pressable
                onPress={() => {
                  this.props.navigation.navigate('DeliveryDetails');
                }}>
                <Text
                  style={{
                    fontSize: RFValue(15, 580),
                    fontFamily: 'PTSans-Bold',
                    color: '#fff',
                  }}>
                  Show Delivery Details
                </Text>
              </Pressable>
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: RFValue(16, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'justify',
                  color: 'black',
                }}>
                Delivery Location
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('screen').width / 1.3,
                  marginHorizontal: 10,
                  // alignItems: 'center',
                  marginTop: 10,
                }}>
                <Icon name="location" type="ionicon" size={25} />
                <Text
                  style={{
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    marginHorizontal: 4,
                    color: 'black',
                  }}>
                  Bell Road Clement Town,Dehradun uttarakhand, 248001
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 8,
              borderWidth: 0.5,
              borderColor: 'color',
              alignSelf: 'center',
              // backgroundColor: 'grey',
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                marginTop: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Sub Total
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                ₹ 450
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                marginTop: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Delivery Charges
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                ₹ 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 5,
                marginTop: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                ₹ 470
              </Text>
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 20,
              borderRadius: 15,
              backgroundColor: '#f7963b',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Text
                style={{
                  fontSize: RFValue(17, 580),
                  fontFamily: 'PTSans-Bold',
                  color: '#fff',
                }}>
                Continue Shoping
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Track;
