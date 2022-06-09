import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const ICONSNEW = [
	{
		name: "Home",
		active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
		inactive:
			"https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
	},
	{
		name: "Search",
		active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
		inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
	},
];

const BottomTabs = ({ icons, navigation }) => {
	const [activeTab, setActiveTab] = useState("Home");
	const Icon = ({ icon }) => (
		<TouchableOpacity onPress={() => setActiveTab(icon.name)}>
			<Image
				source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
				style={styles.icon}
			/>
		</TouchableOpacity>
	);
	return (
		<View style={styles.wrapper}>
			<Divider width={1} orientation="vertical" />
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
					<Image source={{ uri: ICONSNEW[0].inactive }} style={styles.icon} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.push("SearchScreen")}>
					<Image source={{ uri: ICONSNEW[1].inactive }} style={styles.icon} />
				</TouchableOpacity>
				{icons.map((icon, index) => (
					<Icon key={index} icon={icon} />
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		width: "100%",
		bottom: 0,
		zIndex: 999,
		backgroundColor: "#000",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		height: 50,
		paddingTop: 10,
	},
	icon: { width: 30, height: 30 },
});
export default BottomTabs;
