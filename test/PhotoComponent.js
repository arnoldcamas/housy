import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';

import numeral from 'numeral';
import styles from './styles';


  // generate random numbers
const getRandomInt = (min, max) => {
    const number = numeral(Math.floor(Math.random() * (max - min + 1) + min));    
    const formattedNumber = number.format('0,0');
    return formattedNumber;
}

class PhotoComponent extends Component {
    constructor(props){
      super(props);
      this.dialogOpen = this.dialogOpen.bind(this);
    }
    dialogOpen() {
      this.props.callback(this.props.content);
    }
    render() {
        return (
          <View  style={styles.cardsContainer}>
            <View style={styles.photoComponent}>
              <TouchableOpacity onPress={this.dialogOpen}>
                <Image
                  style={{width: 150, height: 150 }}
                  source={{uri: this.props.content.thumbnailUrl }}
                />
              </TouchableOpacity>
              <View style={styles.photoContents}>
                <View style={styles.photoInfo}>
                  <Text><Icon name='flame' style={styles.iconStyle} />{`  ${getRandomInt(1000, 8000)}`}</Text>
                </View>
                <View style={styles.photoInfo}>
                  <Text><Icon name='chatboxes' style={styles.iconStyle} />{`  ${getRandomInt(1, 100)}`}</Text>
                </View>
                <View style={styles.photoInfo}>
                  <Text><Icon name='pizza' style={styles.iconStyle} />{`  ${ getRandomInt(1, 100)}`}</Text>
                </View>
              </View>   
            </View>
            <View style={{ marginTop: 10, }}>
           <Text style={{ color: '#5E7BD5'  }}> <Icon name='person' style={{fontSize: 20, color: '#000'}} /> { this.props.content.title } </Text>
         </View>
       </View>
      )
   }
}

PhotoComponent.propTypes = {
    content:PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default PhotoComponent;