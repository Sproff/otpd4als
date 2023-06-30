export interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: string[];
		backgroundColor: string[];
		borderColor: string[];
		borderWidth: number;
	}[];
}

export interface ChartOptions {
	responsive: boolean;
	maintainAspectRatio: boolean;
	plugins: {
		legend: {
			position: "top" | "left" | "bottom" | "right";
			display: boolean;
		};
	};
}
