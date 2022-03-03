import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import { Platform, View } from 'react-native';
import {CATRGORIES , MEALS} from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';


const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals); 
  const displayedMeals=MEALS.filter
  (meal=>meal.categoryIds.indexOf(catId)>=0);

  if(displayedMeals.length===0) {
    return <View style={styles.content}>
      <DefaultText>NO meals found may be check your filters</DefaultText>
    </View>
  }
 
  return <MealList  listData={displayedMeals} navigation={props.navigation} />
};

CategoryMealsScreen.navigationOptions=navigationData=>{
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATRGORIES.find(cat =>cat.id===catId);
  
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    
  };
};

const styles=StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
     
  }
});

export default CategoryMealsScreen;