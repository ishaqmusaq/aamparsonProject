import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { QRCode } from 'react-native-custom-qr-codes-expo';

function HomeScreen({ navigation }) {
	const info = {
		name: 'Huzaifah y. Attah',
		role: 'Human Being',
	};
	return (
		<View style={styles.parentContainer}>
			<View style={styles.container}>
				<View style={styles.headerContent}>
					<Text style={styles.heading}>exchange contact information</Text>
					<Text style={styles.paragraph}>
						Scan this QR below to share your contacts
					</Text>
				</View>

				<View style={styles.qrImgContainer}>
					<QRCode content="Huzaifah" style={styles.qrImg} />
				</View>

				<View style={styles.profile}>
					<View style={styles.profileImgContainer}>
						<Image
							source={require('../../assets/img6.jpg')}
							style={styles.profileImg}
						/>
					</View>
					<View style={styles.profileContent}>
						<Text style={styles.name}>joan shay</Text>
						<Text style={styles.role}>Head of Makerting</Text>
					</View>
				</View>
			</View>

			<View style={styles.bottom}>
				<View style={styles.bottomContainer}>
					<Text style={styles.noticeText}>Want to add a new connection?</Text>
					<TouchableOpacity
						style={styles.btnContainer}
						onPress={() => {
							navigation.navigate('Scanner');
						}}
					>
						<Text style={styles.btnText}>Scan QR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	container: {
		flex: 1,
		marginHorizontal: 50,
		justifyContent: 'space-evenly',
	},
	heading: {
		fontWeight: 'bold',
		textTransform: 'capitalize',
		fontSize: 18,
	},
	paragraph: {
		color: 'gray',
		fontSize: 17,
		marginTop: 15,
	},
	qrImgContainer: {
		height: 300,
		alignSelf: 'center',
	},

	qrImg: {
		// width: '100%',
		// height: '100%',
		// alignSelf: 'center',
		// backgroundColor: 'red',
	},
	profile: {
		flexDirection: 'row',
	},
	profileImg: {
		width: 60,
		height: 60,
		borderRadius: 50,
	},
	profileContent: {
		marginLeft: 20,
		justifyContent: 'space-around',
	},
	name: {
		textTransform: 'capitalize',
		fontWeight: 'bold',
		fontSize: 17,
	},
	role: {
		fontSize: 16,
		color: 'gray',
	},
	bottom: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 70,
		borderTopColor: '#c7c7c7',
		borderTopWidth: 1,
		justifyContent: 'center',
	},
	bottomContainer: {
		marginHorizontal: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	btnContainer: {
		borderColor: 'red',
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 4,
	},
	btnText: {
		color: 'red',
		fontSize: 15,
	},
	noticeText: {
		fontSize: 15,
	},
});

export default HomeScreen;
