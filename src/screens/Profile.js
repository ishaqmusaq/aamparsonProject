import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

function Profile({ route }) {
	const { good, bad } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/img6.jpg')} style={styles.image} />
				<View style={styles.info}>
					<Text style={styles.name}>{good}</Text>
					<Text style={styles.role}>{bad}</Text>
				</View>
			</View>
			<View style={styles.iconContainer}>
				<Entypo name="twitter-with-circle" size={36} color="black" />
				<Entypo
					name="linkedin-with-circle"
					size={36}
					color="black"
					style={{ marginLeft: 12 }}
				/>
			</View>
			<View>
				<View style={styles.iconInfo}>
					<Feather
						name="phone"
						size={20}
						color="black"
						style={styles.iconInfoIcon}
					/>
					<Text style={styles.iconInfoTxt}>+233 (245) 234 123</Text>
				</View>
				<View style={styles.iconInfo}>
					<MaterialCommunityIcons
						name="email-outline"
						size={20}
						color="black"
						style={styles.iconInfoIcon}
					/>
					<Text style={styles.iconInfoTxt}>larry@mail.com</Text>
				</View>
				<View style={styles.iconInfo}>
					<EvilIcons
						name="location"
						size={24}
						color="black"
						style={styles.iconInfoIcon}
					/>
					<Text style={styles.iconInfoTxt}>Kasoa, Ghana</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 30,
		// backgroundColor: 'red',
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	imageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '25%',
	},
	info: {
		marginLeft: 20,
	},
	name: {
		fontSize: 16,
		textTransform: 'capitalize',
	},
	role: {
		fontSize: 16,
		textTransform: 'capitalize',
	},
	iconContainer: {
		flexDirection: 'row',
		marginVertical: 30,
	},
	iconInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	iconInfoTxt: {
		marginLeft: 12,
		fontSize: 16,
	},
});

export default Profile;
