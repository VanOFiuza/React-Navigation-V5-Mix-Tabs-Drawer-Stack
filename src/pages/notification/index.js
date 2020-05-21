import React from 'react';

import { Text, View, Button } from 'react-native';

import  Header from '../../components/header'




export default function Notification({navigation}) {
    return (
      <View style={{flex:1}}>
        <Header  title="Notification" isHome ={true}  navigation={navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
        />
        </View>
      
      </View>
    );
  }
