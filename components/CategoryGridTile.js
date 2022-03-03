import React from "react";
import { 
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback 
  } from "react-native";

const CategoryGridTile =props => {
    let TouchableCmp=TouchableOpacity;
    if (Platform.OS==='android'&& Platform.Version>=21){
      TouchableCmp= TouchableNativeFeedback;
    }
        return (
          <View style ={styles.gridItem}>
          <TouchableOpacity 
            style={{flex:1}}
            onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </TouchableOpacity>
          </View>
        );
      };



const styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        elevation:3,
        overflow:Platform.OS==='android'&& Platform.Version>=21 
        ? 'hidden'
        :'visible',
      },
      container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.26,
        shadowRadius:10,
        
        padding:20,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        
        borderRadius:10

      },
      title:{
        fontStyle:('normal','italic'),
        fontWeight:('bold'), 
        textAlign:'right',
        
      }
});
export default CategoryGridTile;