import {
	View,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import Validator from "email-validator";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";

const SignupForm = ({ navigation }) => {
	const SignupFormSchema = Yup.object().shape({
		email: Yup.string().email().required("An email is required"),
		username: Yup.string().required().min(2, "A username is required"),
		password: Yup.string()
			.required()
			.min(6, "Your password has to have at least 6 characters"),
	});

	const getRandomProfilePicture = async () => {
		const response = await fetch("https://randomuser.me/api");
		const data = await response.json();
		return data.results[0].picture.large;
	};

	const onSignup = async (email, password, username) => {
		try {
			const authUser = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			console.log("firebase user created succesfully", email, password);
			db.collection("users")
				.doc(authUser.user.email)
				.set({
					owner_uid: authUser.user.uid,
					username: username,
					email: authUser.user.email,
					profile_picture: await getRandomProfilePicture(),
				});
		} catch (error) {
			Alert.alert(
				"Dear user...",
				error.message + "\n\n... What would You like to do next?",
				[
					{
						text: "OK",
						onPress: () => console.log("OK"),
						style: "cancel",
					},
					{ text: "Log in", onPress: () => navigation.push("LoginScreen") },
				]
			);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: "", username: "", password: "" }}
				onSubmit={(values) => {
					onSignup(values.email, values.password, values.username);
				}}
				validationSchema={SignupFormSchema}
				validateOnMount={true}
			>
				{({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
					<>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.email.length < 1 || Validator.validate(values.email)
											? "#ccc"
											: "red",
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="E-mail"
								autoCapitalize="none"
								keyboardType="email-address"
								textContentType="emailAddress"
								autoFocus={true}
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
							/>
						</View>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										1 > values.username.length || values.username.length >= 2
											? "#ccc"
											: "red",
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Username"
								autoCapitalize="none"
								textContentType="username"
								autoFocus={true}
								onChangeText={handleChange("username")}
								onBlur={handleBlur("username")}
								value={values.username}
							/>
						</View>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										1 > values.password.length || values.password.length >= 6
											? "#ccc"
											: "red",
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Password"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								textContentType="password"
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={values.password}
							/>
						</View>
						<Pressable
							titleSize={20}
							style={styles.button(isValid)}
							onPress={handleSubmit}
							disabled={!isValid}
						>
							<Text style={styles.buttonText}>Sign up</Text>
						</Pressable>
						<View style={styles.signupContainer}>
							<Text>Already have an account?</Text>
							<TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
								<Text style={{ color: "#6BB0F5" }}> Log in</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 50,
	},
	inputField: {
		borderRadius: 4,
		padding: 14,
		backgroundColor: "#FAFAFA",
		marginBottom: 10,
		borderWidth: 1,
	},
	button: (isValid) => ({
		backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
		alignItems: "center",
		justifyContent: "center",
		minHeight: 42,
		borderRadius: 4,
		marginTop: 30,
	}),
	buttonText: {
		fontWeight: "600",
		color: "#fff",
		fontSize: 20,
	},
	signupContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		marginTop: 30,
	},
});

export default SignupForm;
