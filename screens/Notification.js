import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Header, Icon} from 'react-native-elements';
export class Notification extends Component {
  renderLeftComponent = () => (
    <Pressable
      onPress={() => {
        this.props.navigation.navigate('Home');
      }}>
      <View style={{alignItems: 'flex-start'}}>
        <Icon name="chevron-back-outline" type="ionicon" size={45} />
      </View>
    </Pressable>
  );
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <Header
            leftComponent={this.renderLeftComponent}
            containerStyle={{
              paddingHorizontal: 0,
              backgroundColor: '#f2f0f0',
            }}
          />

          <View
            style={{
              //   backgroundColor: 'red',
              justifyContent: 'center',
              paddingHorizontal: '4%',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Please enable push notifications , so you
            </Text>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              done miss on new offers & updates.
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 2,
              //   backgroundColor: 'green',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../Images/notifications.png')}
              style={{width: '100%', height: '100%'}}
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
                Alert.alert('Yay!! we will be in touch 🥳');
              }}
              style={{
                backgroundColor: '#edb418',
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
                Allow
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Pressable
              onPress={() => {
                Alert.alert('You will not receive notification 🥲');
              }}
              style={{
                // backgroundColor: '#2AC07E',
                width: Dimensions.get('screen').width / 1.1,
                height: Dimensions.get('screen').height / 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: RFValue(18, 580),
                  fontFamily: 'PTSans-Bold',
                }}>
                Deny
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Notification;
