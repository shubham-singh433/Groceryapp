import React, {Component} from 'react';
import {Dimensions, Pressable} from 'react-native';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import SwiperImages from './SwiperImages';
import HorizontalFlatList from './HorizontalFlatList';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geolocation from '@react-native-community/geolocation';
// navigator.geolocation = require('@react-native-community/geolocation');

import ExclusiveFlatList from './ExclusiveFlatList';
import MoreOffers from './MoreOffers';

class Home extends Component {
  constructor(props) {
    // Geolocation.getCurrentPosition(info => console.log(info));
    super(props);
    this.state = {
      search: '',
      name: '',
      address: '',
    };

    fetch_category = () => {
      fetch(global.api_key + 'get-jwellery-category-web', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          console.warn(json);
          if (json.status) {
            this.setState({
              featured: json.category,
            });
          } else {
            this.setState({
              featured: [],
            });
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({
            isloading: false,
          });
        });
    };
  }

  componentDidMount() {
    this.getData();
    // Geolocation.getCurrentPosition(info => console.log(info));
  }
  setAddress = value => {
    this.setState({
      address: value,
    });
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@name');
      const address = await AsyncStorage.getItem('@address');
      console.warn(value);
      if (value !== null) {
        // value previously stored
        this.setState({
          name: value,
        });
        if (address != null) {
          this.setState({
            address: address,
          });
        }
      }
    } catch (e) {
      // error reading value
      console.warn(e);
    }
  };

  setAddress(value) {
    this.setState({
      address: value,
    });
  }
  renderLeftComponent = () => (
    // <View style={styles.header}>
    <View
      style={{
        flexDirection: 'row',
        width: Dimensions.get('screen').width / 2,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginLeft: 5,
        // backgroundColor: 'red',
      }}>
      <Pressable onPress={() => this.props.navigation.navigate('Maps')}>
        <Icon name="location" type="ionicon" size={28} />
      </Pressable>
      <View>
        <Text
          style={{
            fontSize: RFValue(12, 580),
            fontFamily: 'PTSans-Bold',
            color: 'black',
          }}>
          Welcome {this.state.name}
        </Text>
        <Text
          style={{
            fontSize: RFValue(11, 580),
            fontFamily: 'PTSans-Bold',
            color: 'black',
          }}>
          {this.state.address}
        </Text>
      </View>
    </View>
    // </View>
  );
  renderRightComponent = () => (
    <View style={styles.header}>
      <View
        style={{
          // alignItems: 'center',
          flexDirection: 'row',
          // alignSelf: 'flex-end',
          width: Dimensions.get('screen').width / 4,
          justifyContent: 'space-around',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            // backgroundColor: 'red',
          }}>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('Notification');
            }}>
            <Icon
              name="notifications"
              type="ionicon"
              size={28}
              color={'gold'}
            />
          </Pressable>
        </View>

        <View
          style={{
            justifyContent: 'center',
          }}>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('Cart');
            }}>
            <Icon name="shopping-cart" tyoe="Feather" size={28} />
          </Pressable>
        </View>
      </View>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1, paddingBottom: 29}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            leftComponent={this.renderLeftComponent}
            rightComponent={this.renderRightComponent}
            containerStyle={{
              justifyContent: 'center',
              paddingHorizontal: 0,
              backgroundColor: '#e6e6eb',
              // backgroundColor: '#fff',
              borderRadius: 20,
              alignContent: 'center',
              shadowColor: 'black',
              elevation: 8,
              // height: Dimensions.get('screen').height / 10,
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              marginVertical: '5%',
              flexDirection: 'row',
              borderRadius: 10,
              justifyContent: 'space-evenly',
              width: Dimensions.get('screen').width / 1.1,
              heigth: Dimensions.get('screen').width / 4,
              // backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <View style={{backgroundColor: '#fff'}}>
              <Icon name="search" type="ionicon" size={25} />
            </View>
            <TextInput
              value={this.state.search}
              onChangeText={text => {
                this.setState({
                  search: text,
                });
                console.log(this.state.search);
              }}
              style={{
                backgroundColor: '#fff',
                fontFamily: 'PTSans-Bold',
                // backgroundColor: 'green',
                width: Dimensions.get('screen').width / 1.4,
                // heigth: Dimensions.get('screen').width / 4,
              }}
            />
            <View>
              {this.state.search.length > 0 ? (
                <Pressable
                  onPress={() => {
                    this.setState({
                      search: '',
                    });
                  }}>
                  <Icon name="close-circle-outline" type="ionicon" size={25} />
                </Pressable>
              ) : (
                <View></View>
              )}
            </View>
          </View>
          <SwiperImages />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingHorizontal: '4%',
            }}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Explore by Category
            </Text>
            <Icon name="arrow-forward-outline" type="ionicon" size={30} />
          </View>
          <HorizontalFlatList navigation={this.props.navigation} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingHorizontal: '4%',
            }}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Exclusive Products
            </Text>
            <Icon name="arrow-forward-outline" type="ionicon" size={30} />
          </View>
          <ExclusiveFlatList navigation={this.props.navigation} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
              paddingHorizontal: '4%',
            }}>
            <Text
              style={{
                fontSize: RFValue(15, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              All Products
            </Text>
            <Icon name="arrow-forward-outline" type="ionicon" size={30} />
          </View>
          <MoreOffers />
        </ScrollView>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FF5236',
  },
  header: {
    width: Dimensions.get('screen').width / 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // justifyContent: 'center',
  },
});
