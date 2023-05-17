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
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Headers navigation={this.props.navigation} />
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
              // onChangeText={e => {
              //   this.setState({number: e});
              // }}
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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Pressable
              onPress={() => {
                this.props.navigation.navigate('Otp');
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
                  fontWeight: '600',
                }}>
                Confirm
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Signup;
