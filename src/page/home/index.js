import React,{useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

import Style from './style'




export default function Home(){
    const [display,setDisplay] = useState('0')
    const [dot,setDot] = useState()
    const [operation,setOperation] = useState()


    function Num(x){
        setOperation(false)
        if(x==='.' && !dot){
            setDot(true)
            setDisplay(display + '.')
        }else if(x ==='.'){
            setDisplay(display)
        }else{
            if(display == '0'){
                setDisplay(x)
            }else{          
                setDisplay(display + x)
            }            
        }


        
        if(x ==='clear'){
            setDot(false)
            setDisplay('0')
        }

        if(x==='del'){
            if(display.length === 1){
                setDisplay('0')
            }
            if(display.substring((display.length-1),display.length) === '.'){
                setDot(false)
            }
            setDisplay(display.substring(0,(display.length-1)))
        }
    }

    function symbols(op){
        if(operation===false){
            setOperation(true)
            setDot(false)
            setDisplay(display+op)
        }
    }

    function solve(){
        var result = eval(display)
        setDisplay(result)
    }



    return(
        <View style={Style.body}>
            <View style={Style.screen}>
                <Text style={Style.textScreen}>{display}</Text>
            </View>
            <View style={Style.buttonContainer}>

                <TouchableOpacity style={Style.button2} onPress={()=>{Num('clear')}}>
                    <Text style={Style.textButton}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button2} onPress={()=>{Num('del')}}>
                    <Text style={Style.textButton}>Del</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button} onPress={()=>{Num('7')}}>
                    <Text style={Style.textButton}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('8')}}>
                    <Text style={Style.textButton}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('9')}}>
                    <Text style={Style.textButton}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{symbols('/')}}>
                    <Text style={Style.textButton}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button} onPress={()=>{Num('4')}}>
                    <Text style={Style.textButton}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('5')}}>
                    <Text style={Style.textButton}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('6')}}>
                    <Text style={Style.textButton}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{setDisplay('*')}}>
                    <Text style={Style.textButton}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button} onPress={()=>{Num('1')}}>
                    <Text style={Style.textButton}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('2')}}>
                    <Text style={Style.textButton}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('3')}}>
                    <Text style={Style.textButton}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{symbols('-')}}>
                    <Text style={Style.textButton}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button} onPress={()=>{Num('0')}}>
                    <Text style={Style.textButton}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{Num('.')}}>
                    <Text style={Style.textButton}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{solve()}}>
                    <Text style={Style.textButton}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button} onPress={()=>{symbols('+')}}>
                    <Text style={Style.textButton}>+</Text>
                </TouchableOpacity>

               


            </View>
        </View>

        
    )
}