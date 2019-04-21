import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';  


class Header extends React.Component {
  
   render() {
       const { 
        headerBackgroundColor,
        headerTitleColor,
        headerTitle,
        titleCenter,
        rightComponent,
        leftComponent

        } = this.props;

        return (
         <View>
               <View style={[ { backgroundColor:headerBackgroundColor, }, styles.container]}>
                       <View style={{flex:1,  }} >
                           {leftComponent}
                        </View>
                        <View style={{flex:5,  }} >
                                <Text style={[ titleCenter=="true"?{color:headerTitleColor, alignSelf:'center' }:{color:headerTitleColor}, styles.title]} >  {headerTitle}</Text>
                        </View>
                        <View style={{flex:1, }} >
                            {rightComponent}
                        </View>
                </View>
         </View>
     );
  }
}


export default Header;

const styles = StyleSheet.create({
    container:{
         height:60,
        alignItems: 'center',
        flexDirection: 'row', 
        paddingHorizontal: 20,
      },
      title:{
          fontSize:20,
          fontWeight: '400', 
      },
      progressbar:{
           flexDirection:'row',
           borderColor: "transparent",

      },
      progressbars:{
          flex:1,
          height:5,
          
      }
  });
