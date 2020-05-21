import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import Header from '../../components/header'




export default function Settings({navigation}) {
  return (
    <View style={{flex:1}}>
      <Header title="Settings" isHome ={true} navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('SettingsDetail')}
      >
        <Text>Go to Home Detail  </Text>
      </TouchableOpacity>
    </View>
  );
}

