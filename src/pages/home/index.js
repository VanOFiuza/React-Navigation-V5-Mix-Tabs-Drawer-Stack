import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import  Header from '../../components/header'


export default function Home({navigation}) {
    return (

      <View style={{flex:1}}>
        <Header title="Home"  isHome ={true} navigation={navigation}  />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <TouchableOpacity  
            style={{marginTop:20}}
            onPress={()=> navigation.navigate('HomeDetail',{
              itemId: 86,
              otherParam: 'anything you want here',
            })}
            >
            <Text>Go to Home Detail  </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
