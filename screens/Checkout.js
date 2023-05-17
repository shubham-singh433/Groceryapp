import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacityBase,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {Pressable} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Alert} from 'react-native';

class Checkout extends Component {
  state = {
    selectedIndex: 0,
  };

  renderLeftComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', width: 200}}>
        <Pressable
          onPress={() => {
            this.props.navigation.navigate('Cart');
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
            fontSize: RFValue(14, 580),
            color: 'white',
            fontFamily: 'PTSans-Bold',
          }}>
          Checkout
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={this.renderLeftComponent}
          containerStyle={{
            backgroundColor: '#f7963b',

            borderRadius: 20,
            // paddingHorizontal: 0,
          }}
        />
        <View style={{width: '95%', alignSelf: 'center', paddingTop: 30}}>
          <Text style={[Styler.txt, {marginBottom: 10}]}>
            Selected Type-Delivery
          </Text>
          <Text style={Styler.txt}>Delivery to :Shubham</Text>
          <Text>clemetown Bell road, dehradun, uttarakhand</Text>
          <Text>id:2248007</Text>

          <Text style={[Styler.txt, {marginTop: 15}]}>Payment Options</Text>
          <View style={Styler.pay}>
            <Text
              style={{
                fontSize: RFValue(10, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Debit Card
            </Text>
            <CheckBox
              checked={this.state.selectedIndex == 0}
              onPress={() => this.setState({selectedIndex: 0})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text
              style={{
                fontSize: RFValue(10, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Net Banking
            </Text>
            <CheckBox
              checked={this.state.selectedIndex == 1}
              onPress={() => this.setState({selectedIndex: 1})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text
              style={{
                fontSize: RFValue(10, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              UPI {'(Gpay, PhonePe)'}
            </Text>
            <CheckBox
              checked={this.state.selectedIndex == 2}
              onPress={() => this.setState({selectedIndex: 2})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={Styler.pay}>
            <Text
              style={{
                fontSize: RFValue(10, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              Cash on Delivery
            </Text>
            <CheckBox
              checked={this.state.selectedIndex == 3}
              onPress={() => this.setState({selectedIndex: 3})}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <Text style={[Styler.txt]}>Price Details</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View>
              <Text style={[Styler.txt]}>Total MRP</Text>
              <Text>{'(inclusive of all Taxes)'}</Text>
            </View>
            <Text style={[Styler.txt]}>₹778</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={[Styler.txt]}>Total </Text>
            </View>
            <Text style={[Styler.txt]}>₹847</Text>
          </View>

          <Pressable
            style={{
              height: 50,
              backgroundColor: '#f7963b',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              marginTop: 50,
            }}
            onPress={() => {
              // Alert.alert('Thankyou For Ordering With Us');
              this.props.navigation.navigate('Thankyou');
            }}>
            <Text style={{color: 'white', fontSize: RFValue(16, 580)}}>
              PLACE ORDER
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
export default Checkout;

const Styler = StyleSheet.create({
  pay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    borderRadius: 15,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    marginTop: 5,
  },
  txt: {
    color: 'black',
    fontFamily: 'PTSans-Bold',

    fontSize: RFValue(14, 580),
  },
});
