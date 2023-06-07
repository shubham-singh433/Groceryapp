import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TextInput, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@name');
      const mail = await AsyncStorage.getItem('@email');
      console.warn(value);
      if (value !== null && mail !== null) {
        // value previously stored
        this.setState({
          name: value,
          email: mail,
        });
      }
    } catch (e) {
      // error reading value
      console.warn(e);
    }
  };
  renderLeftcomponent = () => (
    <View style={{alignItems: 'flex-start'}}>
      <Pressable
        onPress={() => {
          this.props.navigation.goBack();
        }}>
        <Icon name="chevron-back-outline" type="ionicon" size={25} />
      </Pressable>
    </View>
  );
  centralComponentRender = () => (
    <View
      style={{
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        // alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: RFValue(18, 580),
          color: 'black',
          fontFamily: 'PTSans-Bold',
        }}>
        Profile
      </Text>
    </View>
  );
  render() {
    return (
      <View>
        <ScrollView>
          <Header
            leftComponent={this.renderLeftcomponent}
            centerComponent={this.centralComponentRender}
            containerStyle={{
              backgroundColor: '#f7963b',

              borderRadius: 20,
              paddingHorizontal: 0,
              // height: Dimensions.get('screen').height / 10,
            }}
          />
          <View
            style={{
              width: Dimensions.get('screen').width / 1,
              height: Dimensions.get('screen').height / 2.5,
              //   backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../Images/Profile.png')}
              style={{width: '90%', height: '100%'}}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              width: Dimensions.get('screen').width / 1,
              justifyContent: 'center',
            }}>
            <View>
              <TextInput
                placeholder="Name"
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  justifyContent: 'center',
                }}
                value={this.state.name}
                onChangeText={value => {
                  this.setState({
                    name: value,
                  });
                }}
              />
            </View>
            <View>
              <TextInput
                placeholder="demo@gmail.com"
                style={{
                  marginTop: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  justifyContent: 'center',
                }}
                value={this.state.email}
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
                Alert.alert('Updates saved');
              }}
              style={{
                backgroundColor: '#f7963b',
                width: Dimensions.get('screen').width / 1.1,
                height: Dimensions.get('screen').height / 18,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: RFValue(18, 580),
                  fontWeight: '600',
                }}>
                Save
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
