import React from 'react'
import {StyleSheet,Text} from 'react-native'
import { emailRegex,passRegex } from './strings'
import { COLORS, SIZES } from './commonStyles'

function testInput(re:RegExp,str:string):boolean{
    return re.test(str)
}
export function EmailValidationError({
    email,
    formkey
}:Readonly<{
    email:string,
    formkey?:boolean
}>){
    return(
        <>
           {!!email && !testInput(emailRegex,email)&&(
            <Text style={style.error}>Email adress is not valid</Text>
           )}
           {email===' ' && formkey &&(
              <Text style={style.error}>Email cannot be empty</Text>
           )}
        </>
    )
}

export function PassValidationError({
    pass,
    formkey
}:Readonly<{
    pass:string,
    formkey?:boolean
}>){
    return(
        <>
        {!!pass && !testInput(passRegex,pass) &&(
            <Text style={style.error}>Password is not valid</Text>
        )}
        {pass=== ' ' && formkey &&(
            <Text style={style.error}>Password cannot be empty</Text>
        )}
        </>
    )
}

export function PassEmptyError({
    pass,
    formKey
}:Readonly<{
    pass:string,
    formKey?:boolean
}>){
    return (
        <>
          {pass=== ' ' && formKey &&(
            <Text style={style.error}>Password cannot be empty</Text>
        )}
        </>
    )
}
export function EmailEmptyError({
    email,
    formKey
}:Readonly<{
    email:string,
    formKey?:boolean
}>){
    return (
        <>
          {email=== ' ' && formKey &&(
            <Text style={style.error}>Email cannot be empty</Text>
        )}
        </>
    )
}
const style= StyleSheet.create({
    error:{
        color:COLORS.SECONDARY.RED,
        fontSize:SIZES.font11,
        paddingLeft:12,
        marginTop:-5,
        marginBottom:10,
    }
});