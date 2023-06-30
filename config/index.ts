import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DEV_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
