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
class Products extends Component {
  constructor(props) {
    super(props);
    console.warn('message for props', this.props);
    this.state = {
      search: '',
      subcategory_link: this.props.route.params.link,
      data: [],
      page: '1',
    };
  }

  componentDidMount() {
    this.fetchDetails(this.props.route.params.link);
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.fetchDetails(this.props.route.params.link);
    });
  }

  fetchDetails = e => {
    // console.warn('Fetching details', e);
    fetch(global.api_key + 'get-product-list-web', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category_link: 'all',
        subcategory_link: e,
        page: this.state.page,
      }),
    })
      .then(response => response.json())
      .then(json => {
        // console.warn('data', json);
        if (json.status) {
          this.setState({
            data: json.data.data,
          });
        } else {
          this.setState({
            data: [],
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

  renderListItemsMenu = ({item}) => (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        alignContent: 'center',
        marginVertical: 60,

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
            width: Dimensions.get('screen').width / 6,
            height: Dimensions.get('screen').height / 6.1,
            // marginBottom: 3,
          }}
          source={{uri: global.img_url + item.picture[0].src}}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          width: Dimensions.get('screen').width / 2.2,
          height: Dimensions.get('screen').height / 13,

          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
          // height: Dimensions.get('screen').height / 3.8,
          // shadowColor: 'black',
          // elevation: 5,
        }}>
        <Text
          style={{
            fontFamily: 'Alkatra-Bold',
            fontSize: RFValue(10, 580),
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
            fontSize: RFValue(11, 580),
            color: 'green',
          }}>
          ₹{item.price}
          <Text
            style={{
              textDecorationLine: 'line-through',
              paddingHorizontal: 10,
              textAlign: 'center',
              fontFamily: 'PTSans-Bold',
              fontSize: RFValue(11, 580),
              color: 'red',
              marginLeft: 10,
            }}>
            / ₹{item.market_price}
          </Text>
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
            backgroundColor: 'green',
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

          {/* <View
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
                value="heloo"
                // {this.state.search}
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
          </View> */}
          {/*  text showing for search and name of search */}
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'flex-start',
              paddingLeft: 20,
            }}>
            <Text
              style={{
                fontSize: RFValue(12, 580),
                color: 'black',
                fontFamily: 'PTSans-Bold',
              }}>
              {this.props.route.params.link}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              paddingBottom: 30,
              // paddingBottom: -30,
            }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              key={'#'}
              keyExtractor={item => {
                '#' + item.id;
              }}
              data={this.state.data}
              numColumns={2}
              renderItem={this.renderListItemsMenu}
              // onEndReachedThreshold={0.4}
              onEndReached={() => {
                console.warn('reached the end');
                this.setState({
                  page: this.state.page + 1,
                });
                this.fetchDetails(this.state.subcategory_link);
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Products;
