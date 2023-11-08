import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default function Titulo(props){
    return(
        <>
            <Text style={estilo.fontG}>{props.principal}</Text>
            <Text style={estilo.fontG}>{props.secundario}</Text>

        </>
    )
}