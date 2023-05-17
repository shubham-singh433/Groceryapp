import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Text, Dimensions, Pressable} from 'react-native';

class Headers extends Component {
  constructor(props) {
    super(props);
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
          // fontFamily: 'PTSans-Bold',
          fontFamily: 'PTSans-Bold',
          color: 'black',
          // justifyContent: 'center',
        }}>
        Verify Number
      </Text>
    </View>
  );

  renderLeftComponent = () => (
    <View>
      <Pressable
        style={{justifyContent: 'center'}}
        onPress={() => {
          this.props.navigation.navigate('CreateNew');
        }}>
        <Icon name="chevron-back" type="ionicon" size={25} />
      </Pressable>
    </View>
  );

  // header right component
  renderRightComponent = () => (
    <View>
      <Icon name="shopping-bag" type="Entypo" size={25} />
    </View>
  );

  render() {
    return (
      <View style={{justifyContent: 'center'}}>
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
      </View>
    );
  }
}
export default Headers;
