import { BreastCancerDataProps } from "@/interfaces/page";

interface FormattedData {
	[key: string]: string[];
}

export const formatData = (data: BreastCancerDataProps[]): FormattedData => {
	const result: FormattedData = {};

	// T.C - O(n^2)
	// if (data?.length > 0) {
	//   for (const prop in data[0]) {
	//     result[prop] = [];
	//     for (const item of data) {
	//       result[prop].push(item[prop]);
	//     }
	//   }
	// }

	// For optimization sake - T.C & S.C - O(n)
	if (data?.length > 0) {
		const props = Object.keys(data[0]);
		for (const prop of props) {
			result[prop] = data.map((item) => item[prop]);
		}
	}

	return result;
};
