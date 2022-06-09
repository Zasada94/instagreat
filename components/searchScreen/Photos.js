import {
	Text,
	View,
	FlatList,
	StyleSheet,
	Image,
	SafeAreaView,
	Dimensions,
} from "react-native";
import { useQuery } from "react-query";

const windowWidth = Dimensions.get("window").width;

async function getPhotos() {
	const response = await fetch("https://jsonplaceholder.typicode.com/photos");

	return response.json();
}

function Photos() {
	const {
		data: photos,
		isError,
		isLoading,
	} = useQuery("getPhotos", getPhotos, {
		placeholderData: [],
	});

	return (
		<SafeAreaView style={styles.container}>
			{isError && <Text>Error</Text>}
			{isLoading && <Text>Loading...</Text>}
			<FlatList
				numColumns={3}
				data={photos}
				renderItem={({ item }) => (
					<View style={{}}>
						<Image
							style={{
								height: windowWidth / 3,
								width: windowWidth / 3,
							}}
							source={{
								uri: item.thumbnailUrl,
							}}
						/>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}

export default Photos;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
