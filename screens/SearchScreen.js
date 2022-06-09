import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BottomTabs from "../components/home/BottomTabs";
import { BOTTOMICONS } from "../data/icons";
import Photos from "../components/searchScreen/Photos";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function SearchScreen({navigation}) {
	return (
			<QueryClientProvider client={queryClient}>
				<Photos />
				<BottomTabs icons={BOTTOMICONS} navigation={navigation}/>
			</QueryClientProvider>

	);
}
