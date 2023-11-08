import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props =>{
return(
<View style={style.flexV2}>
      <Quadrado cor="#009"/>
      <Quadrado cor="#007"/>
      <Quadrado cor="#005"/>
      <Quadrado cor="#003"/>
      <Quadrado cor="#000"/>
</View>
)
}

const style = StyleSheet.create({
    flexV2:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-center',
        backgroundColor: '#000',
        alignItems: 'strech'
    }
})