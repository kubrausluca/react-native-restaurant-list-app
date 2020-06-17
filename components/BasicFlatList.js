import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import FlatListData from '../data/flatListData';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#AB526B',
            //backgroundColor: this.props.index % 2 == 0 ? '#26205D' : '#75878E',
          }}>
          <Image
            source={{uri: this.props.item.image}}
            style={{width: 200, height: 200, margin: 5, borderRadius: 15}}
          />

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.FlatListItem}>{this.props.item.name}</Text>
            <Text
              style={[
                styles.FlatListItem,
                {marginTop: 5, fontSize: 12, marginLeft: 10},
              ]}>
              {this.props.item.location}
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
                alignItems: 'center',
              }}>
              <Image
                style={styles.iconItem}
                source={require('../assets/like.png')}
              />
              <Text style={{color: 'white'}}>{this.props.item.likes}</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', marginLeft: 10}}>
              {this.props.item.isPopular ? (
                <Image
                  style={styles.iconItem}
                  source={require('../assets/fav.png')}
                />
              ) : null}
            </View>

            <View>
              {this.props.item.isOpenNow ? (
                <View style={styles.isOpen}>
                  <Text style={styles.isOpenText}>OPENED NOW</Text>
                </View>
              ) : (
                <View style={styles.isOpen}>
                  <Text style={styles.isOpenText}>CLOSED NOW</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: 'white',
          }}
        />
      </View>
    );
  }
}

export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 22}}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            //console.log(`item = ${JSON.stringify(item)}, index = ${index}`);
            return <FlatListItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatListItem: {
    color: 'white',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 10,
  },
  iconItem: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 5,
  },
  isOpen: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  isOpenText: {
    color: '#7A1E48',
    fontWeight: 'bold',
  },
});
