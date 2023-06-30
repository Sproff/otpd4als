import { getAlsCompounds, getSingleAlsCompound } from "@/queries/alsCompound";
import { useQuery } from "@tanstack/react-query";
import { createQueryFilterStrings } from "@/utils/helpers";

export const useGetAllCompounds = () => {
	return useQuery({
		queryKey: ["getAllCompounds"],
		queryFn: () => getAlsCompounds(),
		retry: 2,
	});
};

export const useGetSingleBreastCancer = (filter?: Record<string, string>) => {
	const queryFilters = encodeURI(createQueryFilterStrings(filter));
	return useQuery({
		queryKey: ["getSingleCompound", queryFilters],
		queryFn: () => getSingleAlsCompound({ queryFilters }),
		retry: 2,
		enabled: queryFilters !== "",
	});
};
