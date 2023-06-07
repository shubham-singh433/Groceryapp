import React, {Component} from 'react';
import Headers from './Headers';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
// import {TextInput} from 'react-native';rrrr
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      validnumber: false,
      loader: false,
    };
  }
  validatenumber = () => {
    var re = /^[1-9]\d*$/;
    var isvalid = re.test(this.state.number);
    if (isvalid) {
      this.setState({validnumber: true});
    }
  };

  registernumber = () => {
    this.setState({loader: true});
    fetch(global.verification + 'staff-mobile-verification', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: this.state.number,
        verification_type: 'vendor',
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.msg == 'ok') {
          this.props.navigation.navigate('Otp', {number: this.state.number});
        }
      })
      .catch(err => {
        console.warn(err);
      })
      .finally(() => {
        this.setState({
          loader: false,
        });
      });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Headers navigation={this.props.navigation} />
          <View
            style={{
              // backgroundColor: 'red'
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('../Images/signup.png')}
              style={{
                height: Dimensions.get('screen').height / 3,
                width: Dimensions.get('screen').width / 1,
              }}
            />
          </View>
          <View
            style={{
              width: Dimensions.get('screen').width / 1.2,
              paddingTop: 20,
              justifyContent: 'center',
              paddingLeft: 20,
              // backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                fontFamily: 'PTSans-Bold',
                textAlign: 'justify',
                color: 'black',
              }}>
              We have sent you SMS with a code to verify number
              {'  +91'}
              {this.state.number}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              paddingTop: 40,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../Images/Flag.jpg')}
                style={{height: 30, width: 35}}
              />
              <Text
                style={{
                  fontFamily: 'PTSans-Bold',
                  fontSize: RFValue(15, 580),
                  paddingLeft: 5,
                  color: 'black',
                }}>
                +91
              </Text>
            </View>
            <TextInput
              value={this.state.number}
              onChangeText={text => {
                text.length > 10
                  ? Alert.alert('Invalid phone number')
                  : this.setState({
                      number: text,
                    });
              }}
              onBlur={this.validatenumber}
              keyboardType="number-pad"
              style={{
                width: '70%',
                height: '60%',
                margin: 12,
                fontSize: RFValue(15, 580),
                borderBottomWidth: 0.5,
                padding: 10,
                fontFamily: 'PTSans-Bold',
              }}
              keyboardAppearance="dark"
            />
            {/* <Text>{this.state.number}</Text> */}
          </View>
          {!this.state.validnumber ? (
            <View>
              <Text
                style={{
                  fontFamily: 'PTSans-Bold',
                  fontSize: RFValue(15, 580),
                  textAlign: 'center',
                  color: 'red',
                }}>
                Not a valid number
              </Text>
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Pressable
                onPress={() => {
                  this.registernumber();
                }}
                style={{
                  backgroundColor: '#2AC07E',
                  width: Dimensions.get('screen').width / 1.1,
                  height: Dimensions.get('screen').height / 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: RFValue(18, 580),
                    fontWeight: '600',
                  }}>
                  Confirm
                </Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
export default Signup;
