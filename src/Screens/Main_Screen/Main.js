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

// Imports
import { w,h } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const axios = require('axios');
const filterIcon = <Icon name="filter-list" size={35} color="#000" />;


import Header from './uikit/Header';
import { Context } from '../../context'



const Item = ({ title, url }) => {
    <View style={styles.item}>
        <View style={styles.itemTitleConatiner}>
        </View>

        <View style={styles.mainIteamContainer}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: `${url}`,
                }}
            />

            <Text style={styles.itemTitle}>{title}</Text>

        </View>
    </View>
};

function Main({ navigation }, props) {
    const [cocktailsArr, setCocktailsArr] = React.useState([])
    const [myUrl, setMyUrl] = React.useState(['Ordinary Drink', 'Shot'])
    const [categoryName, setCategoryName] = React.useState(myUrl.slice(-14))

    const renderItem = ({ item }) => (
        <Item title={item.strDrink} url={item.strDrinkThumb}/>
    );


    React.useEffect(() => {
       getDrinks()
    }, [])


    const getDrinks = async () => {
        await myUrl.map(url => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${url}`)
            .then((response) => {
                console.log(response.data.drinks);
                setCocktailsArr(response.data.drinks)
            })
            .catch((error) => {
                console.log(error)
            })
        })
    }

    const getNames = (arr) => {
        console.log(arr)
    }

  

    return (
        <Context.Provider value={{
            getNames,
        }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>

            <Header navigation = {navigation}/>

            <Button
                title="APPLY"
                buttonStyle={{backgroundColor:'#272727', borderRadius:0}}
                onPress={() => console.log(getNames())}
            />
          
            {/* <View style={styles.item}>
                <Text>{categoryName}</Text>
            </View> */}

           
            </SafeAreaView>
        </Context.Provider>
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

export default Main;
