import React, {useContext} from 'react';
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
    SectionList,
    TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
const filterIcon = <Icon name="filter-list" size={35} color="#000" />;


function Header({ navigation }) {

    return (
            <View style={styles.containerHeader}>
              {/* <TouchableOpacity onPress={() => getNames(['Cocoa'])}> */}
                <Text style={styles.title}>
                    Drinks
                </Text>
              {/* </TouchableOpacity> */}
            
                <View style={styles.icon}>
                    <Text onPress={() => navigation.navigate('Filter')}>
                        {filterIcon}
                    </Text>
                </View>            
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    containerHeader:{
        height: 70,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
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
        color: '#000'
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
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',
      },
      tinyLogo: {
        width: 100,
        height: 100,
      },
  });


export default Header;
