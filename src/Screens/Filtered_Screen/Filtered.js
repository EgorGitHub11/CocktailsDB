import React, {useContext} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    TouchableHighlight
  } from 'react-native';

// Imports
import { w,h } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { 
        Button} from 'react-native-elements';
import CheckBox from 'react-native-check-box'
const axios = require('axios');
const checkIcon = <Icon name="check" size={30} color="#000" />;


import HeaderF from './uikit/FilterHeader';
import { Context } from '../../context';

  function Filtered({navigation}, props) {
    const [categoriesArr, setCategoriesArr] = React.useState([]);
    const [isSelected, setIsSelected] = React.useState(false);
    const [readyCategoryNames, setReadyCategoryNames] = React.useState([])

    const {getNames} = useContext(Context)

    React.useEffect(() => {
        handleGetCocktailsCategories()
    }, [])


    const handleGetCocktailsCategories = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(function (response) {
            console.log(response.data.drinks);
            let tempArr = response.data.drinks;
            tempArr.map(i => {i.selected = true}) 
            setCategoriesArr(tempArr)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const currentCategory = async(el) => {
        console.log('Было')
        console.log(el)
        let tempArr = categoriesArr;
        tempArr.map(category => {
            if (el === category){
                category.selected = !category.selected
            } 
        })
        setCategoriesArr(tempArr)
        setIsSelected(!isSelected)
        console.log('Стало')
        console.log(el)
    }

    const createArray = () => {
        let result = []
        categoriesArr.map((i,index) => {
            if (i.selected === true){
                result.push(i.strCategory)
            }
        })
        getNames(result)
        navigation.goBack()
        console.log(result)
    }



   
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>

                <HeaderF navigation = {navigation}/>

                <ScrollView>
                    {
                        categoriesArr.map((el,index) => {
                            return(

                                <CheckBox
                                    key={index}
                                    leftText={el.strCategory}
                                    leftTextStyle={{color:'#7E7E7E'}}
                                    style={{flex: 1, height:40, justifyContent:'center', margin: 20}}
                                    onClick={() => currentCategory(el)}
                                    isChecked={el.selected}
                                    checkedImage={checkIcon}
                                    unCheckedImage
                                />

                            )
                        })
                    }
                </ScrollView>
                
                <View style={{marginHorizontal:10, marginVertical:10}}>
                    <Button
                        title="APPLY"
                        buttonStyle={{backgroundColor:'#272727', borderRadius:0}}
                        onPress={() => createArray()}
                    />
                </View>
            </SafeAreaView>
        </>
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


export default Filtered;
