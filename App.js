import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './components/acordion'
import MainColors from './components/colors/index'

export default function App() {

  const [uc, setUc] = useState([])

  async function fetchUserUC () {
    const resp = await fetch(`http://academico3.rj.senac.br:8080/api/UnidadeCurricular/filterByUsuarioId/3b700ecc-cec9-4be4-8c00-48bced543861/1`).then(res => res.json()).catch(err => err)
    console.log(resp)
    setUc(resp)
  }

  useEffect(() => {
    fetchUserUC()
  }, [])
  
  
  function renderAccordians () {
    const items = [];
    for (let item of uc) {
      var id = Math.random().toString(16).slice(2)
        items.push(
            <Accordian
                key={id}
                title = {item.nomeCurto}
                data = {["dale", "dele", "doly"]}
                tag = {true}
                tag_name = {["tag1", "tag2"]}
            />
        );
    }
    return items;
  }

  return (
        <View style={styles.container}>
          { renderAccordians() }
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor: MainColors.White,
   
  }
});