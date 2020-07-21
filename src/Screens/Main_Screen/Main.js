import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    // Button,
    Image,
    SectionList
  } from 'react-native';

// Imports
import { w,h } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
const axios = require('axios');
const filterIcon = <Icon name="filter-list" size={35} color="#000" />;
import { Button } from 'react-native-elements';
import Header from './uikit/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getFullCategories } from '../Redux/reducer';


// const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

  const Item = ({ title, url }) => (
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
);

function Main({ navigation }, props) {
    const [cocktailsArr, setCocktailsArr] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const categories = useSelector((state) => state.categories);
    const fullCategories = useSelector((state) => state.fullCategories);
    const dispatch = useDispatch();


    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    //   );

 
    const renderItem = ({ item }) => (
        <Item title={item.strDrink} url={item.strDrinkThumb}/>
    );


    React.useEffect(() => {
       getAllCategories()
    }, [])

    const getAllCategories = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then((response) => {
            console.log(response.data.drinks);
            let res = response.data.drinks;
                res.map(i => {i.selected = true})  
                
            dispatch(getFullCategories(res))
            convertCategoriesArr(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const convertCategoriesArr = async(arr) => {
        let result = []
        await arr.map((i,index) => {
            if (i.selected === true){
                result.push(i.strCategory)
            }
        })
        
       await dispatch(getCategories(result))
       await getDrinks(result)
    }

    const getDrinks = (namesArr) => {
        let tempArr = [];
        namesArr.map((drinkName) => {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkName}`)
                .then((response) => {
                    console.log(response.data.drinks)
                    let res = response.data.drinks;
                    res.map((i) => {
                        tempArr.push(i)
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        })
        console.log(tempArr)
        setCocktailsArr(tempArr)
    }

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

  
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>

            <Header navigation = {navigation}/>

            <View style={styles.item}>
                <Text style={{color:'#7E7E7E', fontSize:14}}>
                    {
                        categories.map((title) => {
                            return(
                                title + " / "
                            )
                        })
                    }
                </Text>
            </View>
          
            <View style={styles.item}>

               
                <Button
                title="get full categories"
                buttonStyle={{backgroundColor:'green', borderRadius:0, margin: 10}}
                onPress={() => console.log(fullCategories)}
            />

             <Button
                title="get name categories"
                buttonStyle={{backgroundColor:'green', borderRadius:0, margin: 10}}
                onPress={() => console.log(categories)}
            />

             <Button
                title="get all cocktails"
                buttonStyle={{backgroundColor:'green', borderRadius:0, margin: 10}}
                onPress={() => console.log(cocktailsArr)}
            />

           {/* <FlatList
                data={cocktailsArr}
                renderItem={renderItem}
                keyExtractor={item => item.idDrink}
            /> */}
            
            {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
        <ScrollView>
                {
                    cocktailsArr.map((item) => {
                        return(
                            <Item title={item.strDrink} url={item.strDrinkThumb}/>
                        )
                    })
                }
        </ScrollView>
            </View>
           
            </SafeAreaView>
        </>
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
