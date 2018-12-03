import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import numeral from 'numeral';
import styles from './styles';

const urlAPI = "https://jsonplaceholder.typicode.com/photos";

export default class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      photos: 0,
      showModal: false,
      modalContent: null
    }
  }

  componentDidMount() {
    // call api when component is mounted
    const content = this.getAPIContent(urlAPI)
    content.then((response) => {
      const photos = Object.keys(response)
                      .filter((val) => response[val].id < 11)
                      .map(val => response[val])
      this.setState({
        photos,
      })
    });
  }

  // fetch API
  getAPIContent = (url) => fetch(url).then(response => response.json())

  // generate random numbers
  getRandomInt = (min, max) => {
    const number = numeral(Math.floor(Math.random() * (max - min + 1) + min));    
    const formattedNumber = number.format('0,0');
    return formattedNumber;
  }

  // TODO: create reusable component
  renderPhotoComponent = (content) => {
    return (
      <View style={styles.photoComponent}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              showModal: true,
              modalContent: content,
            })
          }}
        >
          <Image
            style={{width: 150, height: 150 }}
            source={{uri: content.thumbnailUrl }}
          />
        </TouchableOpacity>
        <View style={styles.photoContents}>
          <View style={styles.photoInfo}>
            <Text>{ this.getRandomInt(1000, 8000)}</Text>
          </View>
          <View style={styles.photoInfo}>
            <Text>{ this.getRandomInt(1, 100)}</Text>
          </View>
          <View style={styles.photoInfo}>
            <Text>{ this.getRandomInt(1, 100)}</Text>
          </View>
        </View>   
      </View>
    )
  }

  createCards = () => {
     let cards = [];
     this.state.photos.map(value => {
       cards.push(
         <View 
            key={value.id}
            style={styles.cardsContainer}
         >
          { this.renderPhotoComponent(value)}
          <View  style={{ marginTop: 10, }}>
            <Text style={{ color: '#5E7BD5'  }}>{ value.title } </Text>
          </View>
        </View>
       );
     });
     return cards;
  }

  // TODO: create reusable component
  PopupDialog = () => {
    const { url, title } = this.state.modalContent;
    return(
      <View style={styles.popupDialogContainer}>
          <View style={styles.popupDialogContent}>
              <TouchableOpacity
                style={styles.popupCloseBtn}
                onPress={() => this.setState({ showModal: false, modalContent: null }) }
              >
                 <Text> Close </Text>
              </TouchableOpacity>
              <Image
                style={{width: 300, height: 300 }}
                source={{uri: url }}
              />
              <View style={styles.popupContents}>
                <View style={{ marginRight: 10 }} >
                    <Text style={styles.popUpText}>{ this.getRandomInt(1000, 8000)}</Text>
                </View>
                <View style={{ marginRight: 10 }}>
                  <Text style={styles.popUpText}>{ this.getRandomInt(1, 100)}</Text>
                </View>
                <View>
                <Text style={styles.popUpText} >{ this.getRandomInt(1, 100)}</Text>
                </View>
              </View>
              <Text style={styles.popUpText} > Title: { title } </Text>
          </View>
      </View>
    )    
  }

  render() {
    // only show content when only mounted
    return this.state.photos  ? (
      <View>
        { this.state.showModal && this.PopupDialog() }
        {/* Apply scrollview since content will big huge */}
         <ScrollView>  
            <View style={styles.container}>
                { this.createCards() }
            </View>
         </ScrollView>
      </View>
    ) : null ;
  }
}
