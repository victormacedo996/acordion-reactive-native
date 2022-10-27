import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MainColors from '../colors';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
          outside_tags: props.tag_name.slice(0, 2)
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    onPress(){
        // TODO: fazer o comportamento para levar para a página esperada
        console.log("teste");
    }
  
  render() {

    return (
        <View>
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                    
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color="black" />
                   
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <View>
                        <FlatList
                        data={this.state.data}
                        numColumns={1}
                        renderItem={({item, index}) => 
                            <View>
                                <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}>
                                    <TouchableHighlight onPress={this.onPress}>
                                        <Text style={[styles.content, styles.itemInActive]} >
                                            {item}
                                        </Text>
                                    </TouchableHighlight>
                                </TouchableOpacity>
                                <View style={styles.childHr}/>
                            </View>
                        }
                        />
                    </View>
                }
        </View>
    )
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        color: MainColors.Indigo,
    },
    itemActive:{
        fontSize: 12,
        color: MainColors.Goldenrod,
    },
    itemInActive:{
        fontSize: 12,
        color: MainColors.Peru,
    },
    btnActive:{
        borderColor: MainColors.Gray,
    },
    btnInActive:{
        borderColor: MainColors.LightSalmon,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: MainColors.WhiteSmoke,
        borderRadius: 10,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: MainColors.PaleTurquoise,
    },
    parentHr:{
        height:1,
        color: MainColors.Indigo,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: MainColors.Indigo,
        width:'100%',
    },
    colorActive:{
        borderColor: MainColors.LightSalmon,
    },
    colorInActive:{
        borderColor: "red",
    },
    border: {
        borderRadius: 150,
    },
    content: {
        fontSize: 20,
        fontWeight:'bold',
        color: "red",
    }
    
});