import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CheckBox, Header, Icon} from 'react-native-elements';
import {FlatList} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const Data = [
  {
    id: 1,
    name: 'Orange',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    url: require('../Images/orange.jpg'),
    price: '140 ₹',
    text: 'Fresh and natural ',
    color: '#f2962c',

    // price: '120 ₹',
    // url:require('../Images/avocado')
  },
  {
    id: 2,
    name: ' Pomogranate',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/pomegranate.jpg'),
    text: 'Fresh and natural ',
    color: '#cf4836',
    // url: require('../Images/'),
  },
  {
    id: 3,
    name: 'Berry',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/fruits1.jpg'),
    text: 'Fresh and natural ',
    color: '#893fab',
  },
  {
    id: 4,
    name: 'Kiwi',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/kiwi.jpg'),
    text: 'Fresh and natural ',
    color: '#4fe86b',
  },
  {
    id: 5,
    name: 'Lemon',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/lemon.jpg'),
    text: 'Fresh and natural ',
    color: '#f7e136',
  },
  {
    id: 6,
    name: 'Strawberries',
    tag: 'fruit & vegetable',
    qunat: '1 kg',
    price: '120 ₹',
    url: require('../Images/strawberries.jpg'),
    text: 'Fresh and natural ',
    color: '#d14558',
  },
];
export class Search extends Component {
  renderListItemsMenu = ({item}) => (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        alignContent: 'center',
        marginVertical: 50,

        width: Dimensions.get('screen').width / 2.2,
        height: Dimensions.get('screen').height / 5.2,
        borderColor: 'black',
        elevation: 15,
        marginHorizontal: 8,
        // backgroundColor: '#fff',
        // backgroundColor: '#fff',
        // borderRadius: 20,
        // shadowColor: 'black',
        // elevation: 5,
      }}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          // alignContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          marginTop: 30,
          backgroundColor: 'white',
          // shadowColor: 'black',
          // elevation: 10,
          // backgroundColor: 'green',
          width: Dimensions.get('screen').width / 2.2,
          height: Dimensions.get('screen').height / 5.4,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            alignSelf: 'flex-end',
            marginRight: 20,
            top: 40,
            zIndex: 1,
          }}>
          <Pressable
            onPress={() => {
              this.setState({
                liked: !this.state.liked,
              });
            }}>
            {this.state.liked ? (
              <Icon name="heart" type="ionicon" size={25} color={'green'} />
            ) : (
              <Icon
                name="heart-outline"
                type="ionicon"
                size={30}
                color={'green'}
              />
            )}
          </Pressable>
        </View>

        <Image
          style={{
            // marginTop: 10,
            alignSelf: 'center',
            // borderRadius: 20,
            width: Dimensions.get('screen').width / 2.3,
            height: Dimensions.get('screen').height / 4.6,
            // marginBottom: 3,
          }}
          source={item.url}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: Dimensions.get('screen').width / 2.2,

          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
          // height: Dimensions.get('screen').height / 3.8,
          // shadowColor: 'black',
          // elevation: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(12, 580),
            color: 'black',
            fontFamily: 'PTSans-Bold',
            justifyContent: 'flex-start',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            textAlign: 'center',

            fontFamily: 'PTSans-Bold',
            fontSize: RFValue(10, 580),
            color: 'green',
          }}>
          {item.tag}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          Alert.alert('Item added to cart');
        }}>
        <View
          style={{
            borderWidth: 0.3,
            width: Dimensions.get('screen').width / 2.2,
            height: Dimensions.get('screen').height / 20,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: item.color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: RFValue(14, 580),
              color: 'white',
              fontFamily: 'PTSans-Bold',
            }}>
            Add To Bag
          </Text>
        </View>
      </Pressable>
    </View>
  );
  renderLeftComponent = () => (
    <Pressable
      onPress={() => {
        this.props.navigation.goBack();
      }}>
      <View
        style={{
          // backgroundColor: '#aaadab',
          width: Dimensions.get('screen').width / 9,
          height: Dimensions.get('screen').height / 19,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'flex-start',
        }}>
        <Icon name="chevron-back" type="ionicon" size={30} />
      </View>
    </Pressable>
  );
  renderRightComponent = () => (
    <View
      style={{
        // backgroundColor: '#aaadab',
        width: Dimensions.get('screen').width / 9,
        height: Dimensions.get('screen').height / 19,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Icon name="shopping-bag" tyoe="ionicon" size={30} />
    </View>
  );
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      liked: false,
      liked_items: [],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            leftComponent={this.renderLeftComponent}
            rightComponent={this.renderRightComponent}
            containerStyle={{
              justifyContent: 'space-between',
              alignContent: 'space-between',
              backgroundColor: '#f2f0f0',
              borderRadius: 20,
              paddingHorizontal: 0,

              // height: Dimensions.get('screen').height / 10,
            }}
          />

          <View
            style={{
              paddingVertical: 20,
              paddingLeft: 10,
              width: Dimensions.get('screen').width / 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: Dimensions.get('screen').width / 1.28,
                heigth: Dimensions.get('screen').width / 8,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderColor: 'black',
                elevation: 10,
              }}>
              <View>
                <Pressable
                  onPress={() => {
                    {
                      this.state.search.length > 0
                        ? Alert.alert('sabar kro 🤚')
                        : Alert.alert('Ye kya doglapan hai 🤔');
                    }
                  }}>
                  <Icon name="search" type="ionicon" size={25} />
                </Pressable>
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
                  width: Dimensions.get('screen').width / 2,
                  heigth: Dimensions.get('screen').width / 8,
                }}
              />
              {this.state.search.length > 0 ? (
                <Pressable
                  onPress={() => {
                    this.setState({
                      search: '',
                    });
                  }}>
                  <View>
                    <Icon
                      name="close-circle-outline"
                      type="ionicon"
                      size={25}
                      color={'red'}
                    />
                  </View>
                </Pressable>
              ) : (
                <View></View>
              )}
            </View>
            <View
              style={{
                width: Dimensions.get('screen').width / 8,
                height: Dimensions.get('screen').height / 18,
                backgroundColor: '#edb418',
                borderRadius: 13,
                marginRight: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                elevation: 10,
              }}>
              <Pressable
                onPress={() => {
                  this.props.navigation.navigate('Filter');
                }}>
                <Icon name="filter" type="ionicon" size={30} />
              </Pressable>
            </View>
          </View>
          {/*  text showing for search and name of search */}
          <View style={{}}>
            {this.state.search.length > 0 ? (
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: RFValue(15, 580),
                  fontWeight: '600',
                }}>
                Search Result for {this.state.search}
              </Text>
            ) : (
              <View></View>
            )}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginBottom: 10,
              // paddingBottom: -30,
            }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              key={'#'}
              keyExtractor={item => {
                '#' + item.id;
              }}
              data={Data}
              numColumns={2}
              renderItem={this.renderListItemsMenu}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Search;
