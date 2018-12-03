import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import numeral from 'numeral';
import styles from './styles';
import PopupDialog from './PopupDialog';
import PhotoComponent from './PhotoComponent';


const urlAPI = "https://jsonplaceholder.typicode.com/photos";

export default class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      photos: 0,
      showModal: false,
      modalContent: null
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.createCards = this.createCards.bind(this);
  }

  componentDidMount() {
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

  getAPIContent = (url) => fetch(url).then(response => response.json())

  handleModalOpen(content) {
    this.setState({
      showModal: true,
      modalContent: content,
    })
  }

  handleModalClose() {
    this.setState({ 
      showModal: false, 
      modalContent: null
    })
  }

  createCards() {
    let cards = [];
    this.state.photos.map(value => {
      cards.push(<PhotoComponent key={value.id} content={value} callback={this.handleModalOpen}/>);
    });
    return cards;
 }

  render() {
    return this.state.photos  ? (
      <View>
         { this.state.showModal && <PopupDialog content={this.state.modalContent} callback={this.handleModalClose} /> }
         <ScrollView>  
            <View style={styles.container}>
                { this.createCards() }
            </View>
         </ScrollView>
      </View>
    ) : null ;
  }
}
