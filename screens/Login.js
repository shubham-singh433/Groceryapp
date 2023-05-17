import React, {Component} from 'react';
import {View, Image, Dimensions, Pressable, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export default class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            // alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: Dimensions.get('screen').height / 1.8,
            backgroundColor: '#adb2b3',
            width: Dimensions.get('screen').width / 1,
          }}>
          <View
            style={{
              // backgroundColor: 'red'
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../android/app/src/main/res/drawable/logo.png')}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}
              style={{
                backgroundColor: '#e84833',
                width: Dimensions.get('screen').width / 1.1,
                height: Dimensions.get('screen').height / 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: RFValue(18, 580),
                  fontFamily: 'PTSans-Bold',
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            height: Dimensions.get('screen').height / 2.3,
            width: Dimensions.get('screen').width / 1,
            backgroundColor: '#adb2b3',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../android/app/src/main/res/drawable/back.png')}
            style={{
              height: Dimensions.get('screen').height / 2.3,
              width: Dimensions.get('screen').width / 1,
              opacity: 0.3,
            }}
          />
        </View>
      </View>
    );
  }
}
