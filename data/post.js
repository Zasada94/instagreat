import { USERS } from "./users";

export const POSTS = [
	{
		imageUrl:
			"https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		user: USERS[0].user,
		likes: 7870,
		caption: "Learning how to code",
		profile_picture: USERS[0].image,
		comments: [
			{
				user: "Hannah",
				comment: "Wow!",
			},
			{ user: "charles", comment: "Congrats!" },
		],
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		user: USERS[1].user,
		likes: 609,
		caption: "Watch me surf ",
		profile_picture: USERS[1].image,
		comments: [
			{
				user: "Anna",
				comment: "That's great!",
			},
			{ user: "ben", comment: "Cool!" },
		],
	},
];
