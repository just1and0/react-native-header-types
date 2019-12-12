# react-native-headers
[![NPM](https://nodei.co/npm/react-native-header-types.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-header-types/)

 - Fully customizable Header View for React Native.
 
 
## Installation

```sh
$ npm install react-native-header-types

or

$ yarn add react-native-header-types
```


## Demo
 ![HeaderView](https://lh3.googleusercontent.com/R1_RDmuVhyfPZE_HiR2NL7iBzMRdi4g5TMSBvlXCYjgUEgLzJWZFAmmKtPpe3DlkltN8KMNVh5LvNQ "HeaderView") 
 >  HeaderView



 ![Progress Header](https://lh3.googleusercontent.com/46un_f9Ugios0HBrMSwEy3B3KPXyVD3o8HwMgzaFpSYcnTOhoj9xPgh1na2KnNY1Ad_YjRfK6d7Jfw)

> Progress Header



## Example

### ProgressHeader


```sh
 import  React  from  'react';

import {StyleSheet, Text, View, TouchableOpacity } from  'react-native';
import { ProgressHeader } from  'react-native-header-types'; 
 
  
class  Index  extends  React.Component {

constructor(props) {
	 super(props);
	 this.state  = {
		 isLoading:true,
		 modalVisible:  false,
	};
 }

	render() {
		 return (
			<View  style={styles.container}>
				 <ProgressHeader
					headerBackgroundColor="transparent"
					headerTitle="ProgressBar"
					headerTitleColor="#5DB482"
					currentprogress="1"
					totalProgress="5"
					progressBottomBarColor="#5DB482"
					progressInactiveColor="#F8F8F8"
					progressActiveColor="#5DB482"
					showHeaderTitle={false}/>

				</View>
			);
	}

}

 
const  styles  =  StyleSheet.create({
	container:{
	flex:  1,
	backgroundColor:'#f5f5f5',
	},
});
 
```

###  API Usage
|Property| Type | Required | Description | Default |
|--|--|--|--|--|
|headerBackgroundColor| string | no | Background color of Header | null |
|headerTitle| string | no | Title of Header | Default |
|headerTitleColor| string | no | Header Title color | null |
|currentprogress| number | yes | Current progress of view | null |
|totalProgress| number | yes | Total amount of view expected  | null |
|progressBottomBarColor| string | no | color of progress bar bottom color | null |
|progressInactiveColor| string | no | Inactive progress bar color | null |
|progressActiveColor| string| no | active progress bar color | null |
|showHeaderTitle| boolean| no | show or hide header content| true |
 


### HeaderView


```sh
 import  React  from  'react';

import {StyleSheet, Text, View, TouchableOpacity } from  'react-native';
import { HeaderView } from  'react-native-header-types';
import  LottieView  from  'lottie-react-native';
 
  
class  Index  extends  React.Component {

constructor(props) {
	 super(props);
	 this.state  = {
		 isLoading:true,
		 modalVisible:  false,
	};
 }

	render() {
		 return (
			<View  style={styles.container}>
				<HeaderView 
					headerBackgroundColor="#8E8E93"
					headerTitle="Header"
					headerTitleColor="white"
					titleCenter="false"
					rightComponent={<TouchableOpacity onPress={()=>this.hello()} ><Text>right gey</Text></TouchableOpacity>}
					leftComponent={<TouchableOpacity onPress={()=>this.hello()} >
					<LottieView source={require('./../../../assets/lottiefiles/menu.json')} autoPlay style={{width:60}} /></TouchableOpacity>}
					/>
			 </View>
			);
	}

}

 
const  styles  =  StyleSheet.create({
	container:{
	flex:  1,
	backgroundColor:'#f5f5f5',
	},
});
 
```

###  API Usage
|Property| Type | Required | Description | Default |
|--|--|--|--|--|
|headerBackgroundColor| string | no | Background color of Header | null |
|headerTitle| string | no | Title of Header | null |
|headerTitleColor| string | no | Header Title color | Default |
|titleCenter| boolean | no | align Header title center | false |
|rightComponent| component | no | Right component | null |
|leftComponent| component | no | left component | null |
 
 
## don't forget to star, like and share :)

## Licensing
This project is licensed under MIT license.