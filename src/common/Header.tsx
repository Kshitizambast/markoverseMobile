import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { DrawerActions } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import type { TDimensions } from '../types/types'

//Constants
const { width, height }: TDimensions = Dimensions.get('window')



interface Props {
 title: string
}


const Header: React.FC<Props> = ({title}) => {

    const [loginSuccess, setLoginSuccess] = React.useState<boolean>(false)
   
   const navigation = useNavigation()
    return (
       <View style={styles.container}>
           <View style={styles.leftContainer}>
            <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <MaterialIcons name="menu"  size={30} color='#fff'/>
            </Pressable>
            {/* Logo */}
                <Pressable
                    onPress={() => console.log('Landing')}
                >
                    <Image 
                        source={require('../../assets/images/logos/logo-500.png')}
                        style={styles.logo}
                    />
            </Pressable>
           </View>
          
           <View style={styles.rightContainer}>
          
                {!loginSuccess ? <View style={styles.authCard}>
                    <Pressable
                            style={styles.loginButton}
                            onPress={() => console.log('Login')}
                    >
                        <Text  style={{fontWeight:'bold', color:'rgba(255, 255, 0, 1)', fontSize: hp('2%') }}>Login</Text>
                    </Pressable>
                    <Pressable
                        style={styles.signUpButton}
                        onPress={() => console.log('Register')}
                    >
                            <Text style={{fontWeight:'bold', color:'rgba(0, 0, 0, 1)', fontSize: hp('2%')}}>Register</Text>
                    </Pressable>
                </View>:
                <View style={styles.authCard}>
                    <Pressable
                            style={styles.loginButton}
                            onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Text  style={{fontWeight:'bold', color:'#fff', fontSize: hp('2%') }}>Hello</Text>
                    </Pressable>
                    <Pressable
                        style={styles.signUpButton}
                        onPress={() => console.log('Deposit')}
                    >
                            <Text style={{fontWeight:'bold', color:'rgba(0, 0, 0, 1)', fontSize: hp('2%')}}>Deposit</Text>
                    </Pressable>
                </View>}
            </View>
           {/* Search */}
       </View>

    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0, 0, 0, 0.95)',
        //backgroundColor:'#fff',
        width,
        display:'flex',
        position:'relative', 
        elevation:10, 
        zIndex:10,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
      
    },
    leftContainer:{
        display:'flex', 
        flexDirection:'row',
        paddingLeft: 5,
        alignItems:'center',
        justifyContent:'center'
    },

    rightContainer:{
        display:'flex', 
        flexDirection:'row', 
        paddingRight:5,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    authCard:{
        display:'flex',
        flexDirection:'row',
        height:hp('7.3%'),
        alignItems:'center',
        justifyContent:'center'
    },
    loginButton:{
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'rgba(255, 255, 0, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        padding:5,
        marginRight:10
    },
     signUpButton:{
        backgroundColor:'rgba(255, 255, 0, 1)',
        justifyContent:'center',
        padding:5,
        borderRadius:3,
        alignItems:'center'
    },
    logo:{
        width:wp('24.3%'),
        height:hp('7.3%'),   
        resizeMode:'center'
    },
 
})

export default Header