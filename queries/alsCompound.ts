import { AxiosInstance } from "../config";

export const getAlsCompounds = async () => {
	const { data } = await AxiosInstance.get("/als-compounds");
	return data;
};

export const getParticularAlsCompounds = async (
	id: string | string[] | undefined
) => {
	const { data } = await AxiosInstance.get(`/als-compounds/${id}`);
	return data;
};

export const getSingleAlsCompound = async ({
	queryFilters,
}: {
	queryFilters?: string;
}) => {
	const { data } = await AxiosInstance.get(
		`/als-compounds/search${queryFilters}`
	);
	return data;
};
