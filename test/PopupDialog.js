
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import numeral from 'numeral';
import styles from './styles';

  // generate random numbers
const getRandomInt = (min, max) => {
    const number = numeral(Math.floor(Math.random() * (max - min + 1) + min));    
    const formattedNumber = number.format('0,0');
    return formattedNumber;
}

class PopupDialog extends Component {
    constructor(props){
        super(props);
        this.dialogClose = this.dialogClose.bind(this);
    }
    dialogClose() {
        this.props.callback();
    }
    render() {
        return(
            <View style={styles.popupDialogContainer}>
                <View style={styles.popupDialogContent}>
                    <TouchableOpacity
                      style={styles.popupCloseBtn}
                      onPress={this.dialogClose}
                    >
                       <Text> Close </Text>
                    </TouchableOpacity>
                    <Image
                      style={{width: 300, height: 300 }}
                      source={{uri: this.props.content.url }}
                    />
                    <View style={styles.popupContents}>
                      <View style={{ marginRight: 10 }} >
                          <Text style={styles.popUpText}>{ getRandomInt(1000, 8000)}</Text>
                      </View>
                      <View style={{ marginRight: 10 }}>
                        <Text style={styles.popUpText}>{ getRandomInt(1, 100)}</Text>
                      </View>
                      <View>
                      <Text style={styles.popUpText} >{ getRandomInt(1, 100)}</Text>
                      </View>
                    </View>
                    <Text style={styles.popUpText} > Title: { this.props.content.title } </Text>
                </View>
            </View>)
    }
}


PopupDialog.propTypes = {
    content:PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default PopupDialog;