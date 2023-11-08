import React from 'react'
import {Text, FlatList, SafeAreaView} from 'react-native'
import estilo from '../../estilo'

import Produtos from './Produtos'

export default props =>{

    const produtoRender = ({item: p}) =>{
        return <Text>{p.id} {p.nome} - R$ {p.preco}</Text>
    }
    return(
        <>
            <SafeAreaView>
                <Text style={estilo.fontG}>
                    Lista de Produtos
                </Text>
                <FlatList
                    data={Produtos}
                    keyExtractor={i=>`${i.id}`}
                    renderItem={produtoRender}
                />
            </SafeAreaView>
        </>
    )
}