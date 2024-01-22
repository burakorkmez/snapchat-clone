import { auth } from "@/auth";
import { connectToMongoDB } from "@/lib/db";
import User, { IUserDocument } from "@/models/userModel";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		const session = await auth();
		if (!session) return;
		await connectToMongoDB();

		const users: IUserDocument[] = await User.find();
		// Filter the authenticated user from the list
		const filteredUsers = users.filter((user) => user._id.toString() !== session.user._id.toString());
		return NextResponse.json(filteredUsers);
	} catch (error) {
		console.log("Error in get-users route handler", error);
		throw error;
	}
};
