import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


import FiltersScreen from '../screens/FilterScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOption={
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle:{
    fontStyle:'italic',
  },
 headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
 headerTitle:'A Screen'
}
const MealsNavigator = createStackNavigator(
  {
  Categories: {
    screen:CategoriesScreen,
   },
  CategoryMeals: {
    screen: CategoryMealsScreen, 
  },
  MealDetail: MealDetailScreen
},
{

  defaultNavigationOptions: defaultStackNavOption
}
);
const FavNavigator= createStackNavigator({
  Favorites:FavoritesScreen,
  MealDetail: MealDetailScreen
},{

  defaultNavigationOptions:defaultStackNavOption
});

const tabScreenConfig ={
  Meals: {
    screen: MealsNavigator,
    navigationOptions:{
    tabBarIcon:(tabInfo)=>{
      return (
      <Ionicons
       name='ios-restaurant'
        size={25}
         color={tabInfo.tintColor}
         />
         );
    },
    tabBarColor:Colors.primaryColor
  }
},
  Favorites: {
    screen:FavNavigator,
    navigationOptions:{
    tabBarLabel:'Favorites!',
    tabBarIcon:(tabInfo)=>{
      return (
      <Ionicons
       name='ios-star'
        size={25} 
        color={tabInfo.tintColor}
        />
      ); 
    },
    tabBarColor:Colors.accentColor
  }
}
};

const MealsFavTabNavigator = 
Platform.OS ==='android'
?createMaterialBottomTabNavigator(tabScreenConfig,{ 
  activeTintColor:'white',
shifting:true,
barStyle:{
  backgroundColor:Colors.primaryColor
}
})
: createBottomTabNavigator(
tabScreenConfig,{
  tabBarOptions:{
    // inactiveBackgroundColor:Colors.primaryColor,
    activeTintColor:Colors.accentColor
  }
}
);
const FiltersNavigator = createStackNavigator({
  Filters:FiltersScreen
},
{
  // navigationOptions:{
  //   drawerLabel:'Filters!!!'
  // },
defaultNavigationOptions: defaultStackNavOption
}
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen:MealsFavTabNavigator,
  Filters: FiltersNavigator,
  navigationOptions:{
    drawerLabel:'Meals'
  }
},  
Filters:FiltersNavigator
},{
  contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontStyle:'italic',
      fontWeight:'bold'
    }
  }
});


export default createAppContainer (MainNavigator);