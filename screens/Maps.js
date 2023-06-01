import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  PermissionsAndroid,
  Dimensions,
  Pressable,
} from 'react-native';

import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeX: 37.4226711,
      longitudeY: -122.0849872,
    };
  }
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Grocery store',
          message: ' Grocery store wants access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {
    this.requestLocationPermission();
    Geolocation.getCurrentPosition(info => console.log(info));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            top: 75,
            zIndex: 2,
            flexDirection: 'row',
            // alignSelf: 'flex-start',
            justifyContent: 'space-around',
            width: Dimensions.get('screen').width / 1.1,
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Icon name="chevron-back-outline" type="ionicon" size={32} />
          </Pressable>
          <GooglePlacesAutocomplete
            placeholder="Search "
            fetchDetails={true}
            returnKeyType={'search'}
            listViewDisplayed={'auto'} // true/false/undefined
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            keyboardShouldPersistTaps={'handled'}
            query={{
              key: 'AIzaSyBbEZPYEYtC9sMCTjvDdM1LmlzpibLXOIc',
              language: 'en',
            }}
            currentLocation={true}
            styles={{
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {
                color: 'black', //To see where exactly the list is
                zIndex: 1, //To popover the component outwards
                position: 'absolute',
                top: 55,
                width: Dimensions.get('screen').width / 1.3,
              },
              textInputContainer: {
                zIndex: 1,
                width: Dimensions.get('screen').width / 1.18,
              },
            }}
          />
        </View>

        <MapView
          region={{
            latitude: 37.4226711,
            longitude: -122.0849872,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        {/* <View style={{zIndex: 2}}> */}

        {/* </View> */}
      </View>
    );
  }
}
export default Maps;
