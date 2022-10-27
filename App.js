import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './components/acordion_uc'
import MainColors from './components/colors/index'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Non Veg Biryanis', 
          data: ['Biryani also known as biriyani', 'biriani, birani or briyani'],
          tag_name: ["Dale", "teste"]
        },
        { 
          title: 'Pizzas',
          data: ['Pizza is a savory dish of Italian origin', 'consisting of a usually round'],
          tag_name: ["Dele"]
        },
        { 
         title: 'Drinks',
         data: ['A drink (or beverage) is a liquid intended for human consumption', 'In addition to their basic function'],
         tag_name: ["Doly"]
        },
        { 
          title: 'Deserts',
          data: ['A dessert is typically the sweet course that concludes', 'a meal in the culture of many countries'],
          tag_name: ["TAG"]
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
      var id = Math.random().toString(16).slice(2);
        items.push(
            <Accordian
                key={id}
                title = {item.title}
                data = {item.data}
                tag_name = {item.tag_name}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor: MainColors.White,
   
  }
});