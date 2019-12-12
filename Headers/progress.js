import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';  


class Progress extends React.Component {
constructor(props) {
  super(props); 

  this.state = {
    isLoading:true,  
  };
}


 
   render() {
       const { 
        headerBackgroundColor,
           headerTitleColor, 
           progressBottomBarColor, 
           progressActiveColor,
           currentprogress, 
           progressInactiveColor, 
           totalProgress 
        } = this.props;

        var myloop = [];

       for (let i = 0; i < totalProgress; i++) {
            myloop.push(
                 <View key={i} style={[ currentprogress==i+1?{ backgroundColor:progressActiveColor }:{ backgroundColor:progressInactiveColor }, styles.progressbars]} ></View>
            );
       }
       return (
         <View>
                 {this.props.showHeaderTitle !== false &&
               <View style={[ { backgroundColor:headerBackgroundColor, }, styles.container]} >
                        <Text style={[{color:headerTitleColor}, styles.title]} >{this.props.headerTitle}</Text>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Text style={[{color:headerTitleColor}, styles.title]} > {currentprogress}/{totalProgress}  </Text>
                        </View>
               </View>}
               <View style={[{ borderBottomWidth:1, borderBottomColor:progressBottomBarColor }, styles.progressbar]} >
                              {myloop}
                        
                </View>
         </View>
     );
  }
}

export default Progress;

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
