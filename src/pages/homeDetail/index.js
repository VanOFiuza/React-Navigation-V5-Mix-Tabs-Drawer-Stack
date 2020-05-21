import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import  Header from '../../components/header'


export default function HomeDetail({route, navigation}) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
    return (

      <View style={{flex:1}}>
        <Header title="Home Detail" navigation={navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Detail ! {itemId}</Text>

        </View>
      </View>
    );
  }
