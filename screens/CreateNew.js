import React, {Component} from 'react';
import {Pressable, ScrollView} from 'react-native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Icon, Header} from 'react-native-elements';
import {Alert} from 'react-native';
class CreateNew extends Component {
  renderLeftcomponent = () => (
    <View style={{alignItems: 'flex-start'}}>
      <Icon name="chevron-back-outline" type="ionicon" size={25} />
    </View>
  );
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
              // shadowColor: 'black',
              // // shadowOffset: {width: -4, height: 4},
              // shadowOpacity: 1,
              // shadowRadius: 15,
              // elevation: 10,
              // justifyContent: 'center',rr
              // height: Dimensions.get('screen').height / 10,
            }}
          />

          <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
            <Text style={styles.sign_intext}> Create New Account</Text>
            <Text
              style={{
                fontSize: RFValue(16, 580),
                color: 'black',
                marginLeft: 12,
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
              />
            </View>
            <View style={{backgroundColor: 'white'}}>
              <Text style={styles.pswd_text}>Email Address</Text>
              <TextInput
                keyboardType="default"
                style={styles.pswd_input}
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
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
              onPress={() => {
                Alert.alert('Welcome to FOGRO');
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
    fontSize: RFValue(20, 580),
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
