import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import  Header from '../../components/header'




export default function SettingsDetail({navigation}) {
    return (
      <View style={{flex:1}}>
        <Header  title="Settings Detail" navigation={navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings Detail!</Text>
        </View>
      
      </View>
    );
  }
