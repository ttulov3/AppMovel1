import React from 'react'
import {Text} from 'react-native'
import estilo from '../estilo'

import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props =>{
    const [num, setNum] = useState()
    const inc = () => setNum (num+1)
    const dec = () => setNum (num+1)

    return(
        <>

            <Text style={estilo.FontG}>
                Contador
            </Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec}/>

        </>
    )
}
