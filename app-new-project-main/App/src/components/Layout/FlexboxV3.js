import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props =>{
return(
<View style={style.flexV3}>
      <Quadrado cor="#009" lado={20}/>
      <Quadrado cor="#007" lado={30}/>
      <Quadrado cor="#005" lado={40}/>
      <Quadrado cor="#003" lado={50}/>
      <Quadrado cor="#000" lado={60}/>
</View>
)
}

const style = StyleSheet.create({
    flexV3:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        heigth: 300,
        backgroundColor: '#ff23',
        alignItems:'baseline',
    }
})