export const createQueryFilterStrings = (
	filterObj: Record<string, string> = {},
	isStart?: boolean
) => {
	const query = Object.keys(filterObj)
		.map((key) => `${key}=${filterObj[key]}`)
		.join("&");
	return isStart ? query : `?${query}`;
};
