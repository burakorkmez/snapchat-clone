import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
	if (cachedConnection) {
		console.log("Using cached MONGODB connection");
		return cachedConnection;
	}
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI as string);
		cachedConnection = conn.connection;

		console.log("New mongodb connection established");
		return cachedConnection;
	} catch (error) {
		console.log(error);

		throw error;
	}
}
