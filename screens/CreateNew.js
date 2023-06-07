import React, {Component} from 'react';
import {Pressable, ScrollView} from 'react-native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon, Header} from 'react-native-elements';
import {Alert} from 'react-native';
import {Image} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
class CreateNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ' ',
      name: '',
      validmail: false,
      validname: false,
    };
  }
  renderLeftcomponent = () => (
    <View style={{alignItems: 'flex-start'}}>
      <Icon name="chevron-back-outline" type="ionicon" size={25} />
    </View>
  );

  nameRegx = () => {
    var re = /^[a-z ,.'-]+$/i;
    var isvalid = re.test(this.state.name);
    console.warn(isvalid);
    if (isvalid) {
      this.setState({
        validname: true,
      });
    }
  };
  emailRegx = () => {
    var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var isvalid = re.test(this.state.email);
    console.warn(isvalid);
    if (isvalid) {
      this.setState({
        validmail: true,
      });
    }
  };

  storeData = async value => {
    try {
      // Alert.alert('hello');
      await AsyncStorage.setItem('@name', this.state.name);
      await AsyncStorage.setItem('@email', this.state.email);
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    return (
      <View style={styles.external_conatiner}>
        <ScrollView>
          <Header
            leftComponent={this.renderLeftcomponent}
            containerStyle={{
              backgroundColor: 'white',
              // backgroundColor: '#fff',
              borderRadius: 20,
            }}
          />

          <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
            <Text style={styles.sign_intext}> Create New Account</Text>
            <Text
              style={{
                fontSize: RFValue(13, 580),
                color: '#a3a0a0',
                paddingLeft: 12,
                fontFamily: 'PTSans-Bold',
              }}>
              Enter your details to create account
            </Text>
          </View>

          <View style={styles.content_container}>
            <View style={{backgroundColor: 'white'}}>
              <Text style={styles.email_text}>Name</Text>
              <TextInput
                keyboardType="default"
                style={styles.email_input}
                placeholder="Name"
                value={this.name}
                onBlur={this.nameRegx}
                onChangeText={value => {
                  this.setState({
                    name: value,
                  });
                  // console.warn(this.state.name);
                }}
              />
              {!this.state.validname ? (
                <View>
                  <Text
                    style={{
                      fontFamily: 'PTSans-Bold',
                      fontSize: RFValue(12, 580),

                      color: 'red',
                    }}>
                    Enter a valid name
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
            <View style={{backgroundColor: 'white'}}>
              <Text style={styles.pswd_text}>Email Address</Text>
              <TextInput
                keyboardType="default"
                style={styles.pswd_input}
                placeholder="Email"
                value={this.email}
                onChangeText={value => {
                  this.setState({
                    email: value,
                  });
                  // console.warn(this.state.email);
                }}
                onBlur={this.emailRegx}
              />
              {!this.state.validmail ? (
                <View style={{width: Dimensions.get('screen').width / 1.1}}>
                  <Text
                    style={{
                      fontFamily: 'PTSans-Bold',
                      fontSize: RFValue(12, 580),

                      color: 'red',
                    }}>
                    Enter a valid email
                  </Text>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 30,
              alignContent: 'center',
            }}>
            <Pressable
              disabled={!(this.state.validmail && this.state.validname)}
              onPress={() => {
                this.storeData();
                // Alert.alert('Welcome to FOGRO');
                this.props.navigation.navigate('Login');
              }}
              style={{
                backgroundColor: '#2AC07E',
                width: Dimensions.get('screen').width / 1.1,
                height: Dimensions.get('screen').height / 14,
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
                Create Profile
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default CreateNew;

const styles = StyleSheet.create({
  external_conatiner: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignSelf: 'center',
    alignContent: 'center',
    // padding: 20,
  },
  header_conatiner: {
    // flex: 0.2,
    // backgroundColor: 'pink',
    marginTop: 50,
    justifyContent: 'center',
  },

  sign_intext: {
    fontSize: RFValue(25, 580),
    margin: 4,
    fontWeight: '800',
    fontFamily: 'PTSans-Bold',
    color: 'black',
  },
  content_container: {
    paddingLeft: 20,
    width: Dimensions.get('screen').width / 1.1,
  },
  email_text: {
    color: 'black',
    fontSize: RFValue(15, 580),
    marginTop: 10,
    fontFamily: 'PTSans-Bold',
  },
  email_input: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    // backgroundColor: 'white',
  },
  pswd_text: {
    color: 'black',
    fontSize: RFValue(15, 580),
    marginTop: 10,
    fontFamily: 'PTSans-Bold',
  },
  pswd_input: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  sub_container: {
    paddingTop: 20,
    // justifyContent: 'flex-end',
  },
  forget_pwd: {
    // paddingLeft: -20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignSelf: 'flex-start',
    width: Dimensions.get('screen').width / 2,
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  forget_text: {
    // marginLeft: -4,
    fontSize: RFValue(13, 580),
    marginLeft: -10,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'PTSans-Bold',
    // top: 20,
  },
  btn_container: {
    justifyContent: 'center',
    backgroundColor: '#0000ffff',
    borderRadius: 10,
    // justifyContent: 'flex-end',
    height: 60,
    top: 30,
  },
  btn_text: {
    fontSize: RFValue(20, 580),
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PTSans-Bold',
  },
  footer_container: {
    // flex: 0.4,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  footer_text: {
    textAlign: 'center',
    fontSize: RFValue(20, 580),
    marginTop: 60,
    color: 'black',
    fontFamily: 'PTSans-Bold',
  },
});
