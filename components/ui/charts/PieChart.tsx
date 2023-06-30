import { Box, Text } from "@chakra-ui/react";
import { ChartData, ChartOptions } from "@/interfaces/chart";
import { Pie } from "react-chartjs-2";

const PieChart = ({
	data,
	options,
}: {
	data: ChartData;
	options: ChartOptions;
}) => {
	// const chartOptsBar = {
	// 	responsive: true,
	// 	plugins: {
	// 		legend: {
	// 			position: "top" as const,
	// 			display: true,
	// 		},
	// 	},
	// 	scales: {
	// 		x: {
	// 			grid: {
	// 				display: false,
	// 			},
	// 			ticks: {
	// 				color: "brand.gray100",
	// 				fontSize: "0.8rem",
	// 				fontWeight: "600",
	// 			},
	// 		},
	// 		y: {
	// 			grid: {
	// 				display: false,
	// 				drawBorder: true,
	// 			},
	// 			ticks: {
	// 				display: true,
	// 			},
	// 		},
	// 	},
	// };

	return (
		<Box mt="5rem">
			<Text fontSize="2rem" fontWeight="800" textAlign="center" mb="4rem">
				Graphical Visualization
			</Text>
			<Box>
				<Pie {...{ data, options }} height={500} width={700} />
			</Box>
		</Box>
	);
};

export { PieChart };
