import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Button,
    Image,
    SectionList
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
const backIcon = <Icon name="arrow-back" size={35} color="#000" />;

function Header({navigation}) {
    return (
        <View style={styles.containerHeader}>
            <Text onPress={() => navigation.goBack()}>
                    {backIcon}
            </Text> 

            <Text style={styles.title}>
                Filters
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#fff',
  },
  containerHeader:{
      height: 70,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      elevation: 7
  },
  title:{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 24,
      color: '#000',
      marginLeft: 20
  },
  item: {
      // backgroundColor: '#fff',
      // padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: 'center',
      flexDirection: 'column',
    },
    itemTitle: {
      fontSize: 14,
      marginLeft: 10,
      color:'#7E7E7E'
    },
    itemTitleConatiner:{
      backgroundColor:'#fff',
      padding:10
    },
    mainIteamContainer:{
      backgroundColor:'#fff',
      justifyContent: 'space-between',
      alignItems:'center',
      flexDirection: 'row',
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
});


export default Header;
