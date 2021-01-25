import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen({ navigation }) {
	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../../assets/logo.png')}
						style={styles.image}
					/>
				</View>

				<View style={styles.headingContainer}>
					<Text style={styles.heading}>codetrain contacts</Text>
				</View>

				<View style={styles.getStartedContainer}>
					<Text
						style={styles.getStarted}
						onPress={() => {
							navigation.navigate('SecondScreen');
						}}
					>
						get started
					</Text>
					<View style={styles.bar}></View>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		backgroundColor: '#e3e3e3',
	},
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignSelf: 'center',
	},
	image: {
		width: 160,
		height: 30,
	},
	heading: {
		textAlign: 'center',
		textTransform: 'uppercase',
		fontSize: 23,
		maxWidth: 160,
		lineHeight: 35,
		letterSpacing: 2,
		color: '#4d4c4c',
	},
	getStarted: {
		textAlign: 'center',
		textTransform: 'uppercase',
		fontSize: 17,
		color: '#4d4c4c',
	},
	bar: {
		height: 1.5,
		width: 110,
		marginTop: 2,
		backgroundColor: '#7a1515',
		alignSelf: 'center',
		marginLeft: 15,
	},
});

export default WelcomeScreen;
