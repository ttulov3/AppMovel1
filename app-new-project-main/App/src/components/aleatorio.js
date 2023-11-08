import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default ({min, max})=>{
    const conta = max-min + 1
    const aleatorio = parseInt(Math.random()*conta)+min
    return(
        <Text style={estilo.fontG}>
            O valor sorteado é: {aleatorio}
        </Text>
    )

}