import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
// import OTPInput from '@twotalltotems/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';
import CountDown from 'react-native-countdown-component';
class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: true,
    };
  }
  renderCentralComponent = () => (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Text
        style={{
          // textAlign: 'center',
          fontSize: RFValue(18, 580),
          fontFamily: 'PTSans-Bold',
          color: 'black',
          // justifyContent: 'center',
        }}>
        Verify Number
      </Text>
    </View>
  );
  renderLeftComponent = () => (
    <Pressable
      onPress={() => {
        this.props.navigation.navigate('Signup');
      }}>
      <View style={{justifyContent: 'center'}}>
        <Icon name="chevron-back" type="ionicon" size={25} />
      </View>
    </Pressable>
  );

  // header right component
  renderRightComponent = () => (
    <View>
      <Icon name="shopping-bag" type="Entypo" size={25} />
    </View>
  );
  render() {
    return (
      <View>
        <ScrollView>
          {/* <Headers /> */}

          <Header
            leftComponent={this.renderLeftComponent}
            rightComponent={this.renderRightComponent}
            cen
            centerComponent={this.renderCentralComponent}
            containerStyle={{
              backgroundColor: 'white',
              // backgroundColor: '#fff',
              borderRadius: 20,
              // shadowColor: 'black',
              // // shadowOffset: {width: -4, height: 4},
              // shadowOpacity: 1,
              // shadowRadius: 15,
              // elevation: 10,
              // justifyContent: 'center',rr
              // height: Dimensions.get('screen').height / 10,
            }}
          />

          <View
            style={{
              width: Dimensions.get('screen').width / 1.1,
              justifyContent: 'center',
              alignContent: 'flex-start',
              paddingHorizontal: '5%',
              //   paddingHorizontal: '10%',
            }}>
            <Text
              style={{
                fontSize: RFValue(17, 580),
                paddingTop: 20,
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Enter One Time Password !
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: 'red'
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../Images/otp.png')}
              style={{
                height: Dimensions.get('screen').height / 4,
                width: Dimensions.get('screen').width / 1,
              }}
            />
          </View>
          <View
            style={{
              paddingTop: '15%',
              width: Dimensions.get('screen').width / 1,
              // justifyContent: 'center',
              alignItems: 'center',
              // alignContent: 'center',
              paddingHorizontal: '5%',
              // backgroundColor: 'red',
            }}>
            <OTPTextInput
              inputCount={4}
              textInputStyle={{
                // backgroundColor: 'red',
                width: 80,
                height: 80,
                borderWidth: 1,
                borderRadius: 10,
                // paddingHorizontal: 8,
              }}
              containerStyle={{
                shadowcolor: 'black',
                elevation: 20,

                paddingHorizontal: '5%',
              }}
              handleTextChange={text => {
                if (text.length === 4) {
                  if (text === '4321') {
                    this.props.navigation.navigate('Home');
                  } else {
                    alert('OTP is invalid');
                  }
                }
              }}
            />
          </View>
          <View style={{paddingHorizontal: '5%'}}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                paddingTop: 20,
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Didn't received any code ?
            </Text>
            <View>
              {!this.state.countdown ? (
                <Pressable
                  onPress={() => {
                    Alert.alert('Sent OTP in registered mobile number');
                    this.setState({
                      countdown: true,
                    });
                  }}
                  disabled={this.state.countdown}>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: RFValue(15, 580),
                      fontFamily: 'PTSans-Bold',
                      // paddingTop: 10,
                    }}>
                    Resend OTP
                  </Text>
                </Pressable>
              ) : (
                <CountDown
                  size={20}
                  until={30}
                  onFinish={() =>
                    this.setState({
                      countdown: false,
                    })
                  }
                  digitStyle={{
                    width: 30,
                    height: 30,
                  }}
                  // digitStyle={{
                  //   backgroundColor: '#FFF',
                  // }}
                  digitTxtStyle={{color: '#1CC625'}}
                  timeToShow={['M', 'S']}
                  timeLabels={{m: null, s: null}}
                  separatorStyle={{color: '#1CC625'}}
                  showSeparator
                />
              )}
            </View>
          </View>
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
              style={{
                backgroundColor: '#2AC07E',
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
                Continue
              </Text>
            </Pressable>
          </View> */}
        </ScrollView>
      </View>
    );
  }
}
export default Otp;
