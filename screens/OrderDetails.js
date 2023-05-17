import React, {Component} from 'react';
import {View, Image, Text, Dimensions, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import MoreOffers from './MoreOffers';

class OrderDetails extends Component {
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
      </View>
    );
  };
  renderCentralComponent = () => (
    <View>
      <Text
        style={{
          paddingLeft: 10,

          color: 'white',
          fontSize: RFValue(14, 580),
          fontFamily: 'PTSans-Bold',
        }}>
        Order Details
      </Text>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', marginBottom: 20}}>
        <Header
          leftComponent={this.renderLeftComponent}
          centerComponent={this.renderCentralComponent}
          containerStyle={{
            backgroundColor: '#f7963b',

            borderRadius: 20,
            // paddingHorizontal: 0,
          }}
        />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 8,
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderBottomWidth: 0.5,
              // borderTopWidth: 0.5,
            }}>
            <Icon name="hourglass" type="ionicon" size={30} />

            <View>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'justify',
                  color: 'black',
                }}>
                Order #123456
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'justify',
                  color: 'black',
                }}>
                04-Apr-23 06:56 PM
              </Text>
              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: RFValue(14, 580),
                  fontFamily: 'PTSans-Bold',
                  color: 'black',
                }}>
                ₹7045.57
              </Text>
            </View>
          </View>
          <MoreOffers />
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
        </ScrollView>
      </View>
    );
  }
}
export default OrderDetails;
