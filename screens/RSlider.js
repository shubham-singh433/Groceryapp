// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import RangeSlider from 'rn-range-slider';
// import {Alert} from 'react-native';

// class RSlider extends Component {
//   checkState() {
//     let var1 = 'pro/param/';
//     if (var1.length) {
//       let matchUserList = [
//         {
//           location: {
//             country: 'usa',
//             state: 'clar',
//             city: 'New York',
//           },
//           age: 22,
//           username: 'Emily',
//           likeStatus: 0,
//           isHidden: 0,
//           isBlocked: 0,
//           memberShip: 0,
//           gender: {
//             id: 0,
//             label: 'women',
//           },
//           photoVerify: 1,
//         },
//         {
//           location: {
//             country: 'usa',
//             state: 'clar',
//             city: 'New York',
//           },
//           age: 22,
//           username: 'Emily',
//           likeStatus: 0,
//           isHidden: 0,
//           isBlocked: 0,
//           memberShip: 0,
//           gender: {
//             id: 0,
//             label: 'women',
//           },
//           photoVerify: 1,
//         },
//       ];
//       if (matchUserList.length) {
//         if (this.checkTime() == false) return false;
//       }
//     }
//     return false;
//   }

//   checkTime() {
//     let var1 = 'pro/param/';
//     if (var1.length) {
//       let matchUserList = [
//         {
//           location: {
//             country: 'usa',
//             state: 'clar',
//             city: 'New York',
//           },
//           age: 22,
//           username: 'Emily',
//           likeStatus: 0,
//           isHidden: 0,
//           isBlocked: 0,
//           memberShip: 0,
//           gender: {
//             id: 0,
//             label: 'women',
//           },
//           photoVerify: 1,
//         },
//         {
//           location: {
//             country: 'usa',
//             state: 'clar',
//             city: 'New York',
//           },
//           age: 22,
//           username: 'Emily',
//           likeStatus: 0,
//           isHidden: 0,
//           isBlocked: 0,
//           memberShip: 0,
//           gender: {
//             id: 0,
//             label: 'women',
//           },
//           photoVerify: 1,
//         },
//       ];
//       if (matchUserList.length) {
//         return false;
//       }
//     }
//     return false;
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSelected: false,
//       rangeHigh: 2000,
//       rangeLow: 200,
//     };
//   }
//   render() {
//     let {props} = this;
//     let {min, max, onValueChanged, style} = props;
//     return (
//       <RangeSlider
//         style={styles.slider}
//         min={18}
//         max={99}
//         step={1}
//         low={min}
//         high={max}
//         floatingLabel={true}
//         onValueChange={(low, high, fromUser) => {
//           if (fromUser) {
//             if (low == high) return;

//             onValueChanged(low, high);
//             Alert.alert(low, high);
//           }
//         }}
//         renderThumb={() => {
//           return (
//             <View
//               style={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: 20,
//                 borderWidth: 2,
//                 backgroundColor: '#ffffff',
//               }}
//             />
//           );
//         }}
//         renderRail={() => {
//           return (
//             <View
//               style={{
//                 flex: 1,
//                 height: 4,
//                 borderRadius: 2,
//                 // backgroundColor: 'green',
//               }}
//             />
//           );
//         }}
//         renderRailSelected={() => {
//           return (
//             <View
//               style={{
//                 height: 4,
//                 borderRadius: 2,
//                 // backgroundColor: 'red',
//               }}
//             />
//           );
//         }}
//         renderLabel={() => {
//           return (
//             <View
//               style={{
//                 alignItems: 'center',
//                 padding: 8,
//                 borderRadius: 4,
//                 borderBottomColor: 'red',
//               }}>
//               <Text style={{fontSize: 16, color: '#fff'}}>
//                 {min} - {max}
//               </Text>
//             </View>
//           );
//         }}
//         renderNotch={() => {
//           return (
//             <View
//               style={{
//                 width: 10,
//                 height: 30,
//                 borderLeftColor: 'transparent',
//                 borderRightColor: 'transparent',
//                 borderTopColor: 'red',
//                 borderLeftWidth: 10,
//                 borderRightWidth: 10,
//                 borderTopWidth: 30,
//               }}
//             />
//           );
//         }}
//       />
//     );
//   }
// }
// export default RSlider;

// const styles = StyleSheet.create({
//   sliderView: {
//     //paddingHorizontal:10,
//     //borderTopWidth: 0,
//     height: 100,
//     //alignItems: 'center',
//     justifyContent: 'center',
//     //paddingRight:20,
//     // backgroundColor: 'green',
//     borderColor: 'green',
//   },
//   sliderTextView: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     // flex: 1,
//     alignItems: 'center',
//     // backgroundColor: 'red',
//   },
//   slider: {
//     //paddingTop:-30,
//     paddingVertical: 15,
//     marginHorizontal: 0,
//     //flex: 1,
//     //height: 40,
//     //width:500,
//     //padding: 10,
//     // backgroundColor: 'red',
//   },
//   slideText: {
//     fontSize: 15,
//     color: '#000',
//   },
//   slideRightText: {
//     fontSize: 15,
//     color: '#000',
//   },
// });
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {AppRegistry, StyleSheet, View, Text, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

class SliderExample extends React.Component {
  constructor(props) {
    super(props);
    const {max, min} = [props.min, props.max];
    this.state = {
      values: [100, 1000],
    };
    console.log(min, max);
  }

  multiSliderValuesChange = values => {
    this.setState({
      values,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: Dimensions.get('screen').width / 6,
              height: Dimensions.get('screen').height / 28,
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: RFValue(17, 580), color: 'black'}}>
              {this.state.values[0]}
            </Text>
          </View>
          <Text
            style={{
              fontSize: RFValue(20, 580),
            }}>
            -
          </Text>
          <View
            style={{
              width: Dimensions.get('screen').width / 6,
              height: Dimensions.get('screen').height / 28,
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: RFValue(17, 580), color: 'black'}}>
              {this.state.values[1]}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            // justifyContent: 'center'
          }}>
          <MultiSlider
            markerStyle={{
              height: 20,
              width: 20,
              borderRadius: 40,
              backgroundColor: '#eb7134',
              shadowRadius: 1,
              shadowOpacity: 0.1,
            }}
            pressedMarkerStyle={{
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: '#eb7134',
            }}
            trackStyle={{
              backgroundColor: '#eb7134',
            }}
            allowOverlap={false}
            values={[this.state.values[0], this.state.values[1]]}
            sliderLength={330}
            onValuesChange={this.multiSliderValuesChange}
            min={1}
            max={1000}
            step={1}
            minMarkerOverlapDistance={40}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            shadowColor: 'black',
            elevation: 20,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              backgroundColor: '#eb6359',
              width: Dimensions.get('screen').width / 1.1,
              height: Dimensions.get('screen').height / 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: RFValue(15, 580),
                fontFamily: 'Alkatra-Bold',
                color: 'white',
              }}>
              APPLY FILTERS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SliderExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
