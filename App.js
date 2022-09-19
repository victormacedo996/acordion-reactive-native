import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './components/acordion'
import MainColors from './components/colors/index'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Non Veg Biryanis', 
          data: ['Biryani also known as biriyani', 'biriani, birani or briyani']
        },
        { 
          title: 'Pizzas',
          data: ['Pizza is a savory dish of Italian origin', 'consisting of a usually round']
        },
        { 
         title: 'Drinks',
         data: ['A drink (or beverage) is a liquid intended for human consumption', 'In addition to their basic function']
        },
        { 
          title: 'Deserts',
          data: ['A dessert is typically the sweet course that concludes', 'a meal in the culture of many countries']
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
      var id = Math.random().toString(16).slice(2)
        items.push(
            <Accordian
                key={id}
                title = {item.title}
                data = {item.data}
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
   backgroundColor: MainColors.primary,
   
  }
});