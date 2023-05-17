import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Pressable} from 'react-native';
class Thankyou extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            width: Dimensions.get('screen').width / 1,
            height: Dimensions.get('screen').height / 1,

            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../Images/Thankyou.png')}
            style={{
              marginTop: 53,
              width: '100%',
              // width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 2,
            }}
          />

          <Text
            style={{
              fontSize: RFValue(12, 580),
              fontFamily: 'PTSans-Bold',
              textAlign: 'center',
              marginHorizontal: 5,
            }}>
            Your order is now being processed we will let you know once the
            order is picked from the outlet .check the status
          </Text>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 18,
              borderRadius: 15,
              backgroundColor: '#f7963b',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Track');
              }}>
              <Text
                style={{
                  fontSize: RFValue(17, 580),
                  fontFamily: 'PTSans-Bold',
                  color: '#fff',
                }}>
                Track My Order
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 18,
              borderRadius: 15,
              backgroundColor: '#f7963b',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 10,
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
                Back To Home
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}
export default Thankyou;
