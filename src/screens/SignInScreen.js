import React from 'react';
import { Image, StyleSheet, View, TextInput, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function SignInScreen({ navigation }) {
	const handleRoute = () => {
		navigation.navigate('Home');
	};

	return (
		<View style={styles.parentContainer}>
			<ScrollView style={styles.container}>
				{/* <View > */}

				<View style={styles.imageContainer}>
					<Image source={require('../../assets/img4.jpg')} />
				</View>

				<View style={styles.content}>
					<View style={styles.errorContainer}>
						<Text style={styles.error}>
							Email or Password is incorrect, check and try again
						</Text>
					</View>
					<View>
						<Text style={styles.formTxt}>Email</Text>
						<TextInput
							placeholder="john.smith@mail.com"
							placeholderTextColor="#a6a2a2"
							style={styles.input}
						/>
					</View>
					<View>
						<Text style={styles.formTxt}>Password</Text>
						<TextInput
							placeholder={'\u2B24 \u2B24 \u2B24 \u2B24 \u2B24'}
							placeholderTextColor="#a6a2a2"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry={true}
							style={[styles.input, styles.passInput]}
						/>
					</View>

					<TouchableOpacity
						style={styles.signinBtnContainer}
						onPress={handleRoute}
					>
						<Text style={styles.signintxt}>sign in</Text>
					</TouchableOpacity>

					<View style={styles.downContent}>
						<Text style={styles.forgotTxt}>Forgot?</Text>
						<TouchableOpacity style={styles.btnContainer}>
							<Text style={styles.btnTxt}>Reset password</Text>
						</TouchableOpacity>
					</View>
					{/* </View> */}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
	},
	container: {
		// flex:1,
		height: '100%',
		// backgroundColor:'blue',
		// justifyContent: 'space-between'
	},
	imageContainer: {
		// flex:0.3,
		// backgroundColor: 'red'
	},
	content: {
		// flex:0.6,
		marginVertical: '15%',
		marginHorizontal: 30,
		// backgroundColor:'green'
	},
	errorContainer: {
		marginBottom: 20,
	},
	error: {
		color: '#7a1515',
		fontSize: 15,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#a6a2a2',
		textAlign: 'right',
		fontSize: 17,
		height: 50,
	},
	passInput: {
		fontSize: 14,
		borderBottomWidth: 0,
	},
	formTxt: {
		position: 'absolute',
		top: 15,
		fontSize: 17,
		color: '#474545',
	},

	signinBtnContainer: {
		backgroundColor: '#ff006f',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 30,
		borderRadius: 7,
	},
	signintxt: {
		color: 'white',
		textTransform: 'uppercase',
		fontSize: 17,
		letterSpacing: 2,
	},
	downContent: {
		flexDirection: 'row',
	},
	btnContainer: {
		borderBottomColor: '#7a1515',
		borderBottomWidth: 2,
		paddingBottom: 2,
		marginLeft: 10,
	},
	btnTxt: {
		fontSize: 16,
		textTransform: 'capitalize',
		letterSpacing: 1,
		color: '#474545',
	},
	forgotTxt: {
		fontSize: 16,
		letterSpacing: 1,
		color: '#474545',
	},
});
export default SignInScreen;
