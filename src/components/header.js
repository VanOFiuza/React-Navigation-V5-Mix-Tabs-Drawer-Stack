import * as React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import  menuIcon from '../assets/bars.png'
import  backIcon from '../assets/back.png'

export default function Header ({title, isHome, navigation}){
    return(
        <View  style={{flexDirection:'row', height:50,}}>
            {
                isHome?
                <TouchableOpacity 
                    style ={{flex:1, justifyContent:'center'}}
                    onPress={()=> navigation.openDrawer() }
                    >
                    <Image  style ={{width:30, height:30, marginLeft:10}} 
                    source ={menuIcon}
                    resizeMode='contain'
                    />
                </TouchableOpacity>
                : 
                <TouchableOpacity
                    style = {{flexDirection:'row', alignItems:'center'}}
                    onPress ={() => navigation.goBack()}
                
                >
                        <Image  style ={{width:30, height:30, marginLeft:10}} 
                        source ={backIcon}
                        resizeMode='contain'
                        />
                    
                </TouchableOpacity>
            }
           
            <View style={{flex:1.5, justifyContent:"center"}}>
                 <Text style={{textAlign:'center'}}>{title}</Text>
            </View>
            <View style = {{flex:1}}></View>
        </View>
    )
}

