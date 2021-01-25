import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SecondScreen from './src/screens/SecondScreen';
import SignInScreen from './src/screens/SignInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ScannerComponent from './src/components/ScannerComponent';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen
					options={{
						header: () => null,
					}}
					name="Welcome"
					component={WelcomeScreen}
				/>
				<Stack.Screen
					options={{
						header: () => null,
					}}
					name="SecondScreen"
					component={SecondScreen}
				/>
				<Stack.Screen
					options={{
						title: 'Sign In',
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerStyle: {
							backgroundColor: '#ff006f',
							borderBottomColor: 'white',
							borderBottomWidth: 0.5,
						},
						headerTitleStyle: {
							letterSpacing: 3,
							fontWeight: '100',
						},
					}}
					name="SignIn"
					component={SignInScreen}
				/>
				<Stack.Screen
					options={{
						title: 'Register',
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerStyle: {
							backgroundColor: '#ff006f',
							borderBottomColor: 'white',
							borderBottomWidth: 0.5,
						},
						headerTitleStyle: {
							letterSpacing: 3,
							fontWeight: '100',
						},
					}}
					name="Register"
					component={RegisterScreen}
				/>
				<Stack.Screen
					options={{
						title: 'Profile',
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerStyle: {
							backgroundColor: '#ff006f',
							borderBottomColor: 'white',
							borderBottomWidth: 0.5,
						},
						headerTitleStyle: {
							letterSpacing: 3,
							fontWeight: '100',
						},
					}}
					name="Profile"
					component={Profile}
				/>
				<Stack.Screen
					options={{
						title: 'Home',
						headerTitleAlign: 'center',
						headerTintColor: 'white',
						headerStyle: {
							backgroundColor: '#ff006f',
							borderBottomColor: 'white',
							borderBottomWidth: 0.5,
						},
						headerTitleStyle: {
							letterSpacing: 3,
							fontWeight: '100',
						},
					}}
					name="Home"
					component={HomeScreen}
				/>

				<Stack.Screen
					options={{
						header: () => null,
					}}
					name="Scanner"
					component={ScannerComponent}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
