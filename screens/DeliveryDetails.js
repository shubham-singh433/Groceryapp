import React, {Component} from 'react';
import {View, Image, Text, Dimensions, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {Pressable} from 'react-native';
import {Header} from 'react-native-elements';

export default class DeliveryDetails extends Component {
  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <Pressable
          onPress={() => {
            this.props.navigation.navigate('Track');
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
          }}>
          Delivery Details
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
              //   height: Dimensions.get('screen').height / 10,
              // backgroundColor: 'red',
              //   alignItems: 'center',
              alignItems: 'flex-start',
              marginLeft: 10,
              justifyContent: 'space-around',
              paddingTop: 20,
              // borderTopWidth: 0.5,
            }}>
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
                  fontSize: RFValue(16, 580),
                  fontFamily: 'PTSans-Bold',
                  textAlign: 'justify',
                  color: 'black',
                  marginLeft: 20,
                }}>
                May 5 , 2023
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Icon
                name="checkmark-circle"
                type="ionicon"
                size={25}
                color={'green'}
              />
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.2,
                  height: Dimensions.get('screen').height / 12,
                  backgroundColor: '#7d6cd4',
                  borderRadius: 15,
                  justifyContent: 'center',

                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  Waiting for confirmation
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  04-Apr-23 06:56 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Icon
                name="checkmark-circle"
                type="ionicon"
                size={25}
                color={'green'}
              />
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.2,
                  height: Dimensions.get('screen').height / 12,
                  backgroundColor: '#883d8f',
                  borderRadius: 15,
                  justifyContent: 'center',

                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  Waiting for confirmation
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  04-Apr-23 06:56 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Icon
                name="checkmark-circle"
                type="ionicon"
                size={25}
                color={'green'}
              />
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.2,
                  height: Dimensions.get('screen').height / 12,
                  backgroundColor: '#5ca3b5',
                  borderRadius: 15,
                  justifyContent: 'center',

                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  Waiting for confirmation
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  04-Apr-23 06:56 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Icon
                name="checkmark-circle"
                type="ionicon"
                size={25}
                color={'green'}
              />
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.2,
                  height: Dimensions.get('screen').height / 12,
                  backgroundColor: '#fc8128',
                  borderRadius: 15,
                  justifyContent: 'center',

                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  Waiting for confirmation
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  04-Apr-23 06:56 PM
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Icon
                name="checkmark-circle"
                type="ionicon"
                size={25}
                color={'green'}
              />
              <View
                style={{
                  width: Dimensions.get('screen').width / 1.2,
                  height: Dimensions.get('screen').height / 12,
                  backgroundColor: '#b4e86b',
                  borderRadius: 15,
                  justifyContent: 'center',

                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  Waiting for confirmation
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(14, 580),
                    fontFamily: 'PTSans-Bold',
                    textAlign: 'left',
                    paddingHorizontal: 10,
                  }}>
                  04-Apr-23 06:56 PM
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
