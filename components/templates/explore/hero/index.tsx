import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import {
	CircleCardLoader,
	LongRectangleCardLoader,
	TableLoader,
	TextLoader,
} from "@/components/templates/loader";
import { PieChart } from "@/components/ui/charts/PieChart";
import { Input } from "@/components/ui/forms/Input";
import {
	useGetAllCompounds,
	useGetSingleBreastCancer,
} from "@/hooks/compounds/useAlsCompound";
import { useDebounce } from "@/hooks/debounce/useDebounce";
import { ChartData, ChartOptions } from "@/interfaces/chart";
import { AlsCompoundsDataProps } from "@/interfaces/page";
import { IAlsProps } from "@/interfaces/tableDefinitions";
import { CustomTableLayout } from "@/layouts/TableLayout";
import { ColumnDef } from "@tanstack/react-table";
import { formatData } from "@/utils/explore";
import { Fragment, useMemo, useState } from "react";

const Hero = () => {
	const [inputSearch, setInputSearch] = useState("");
	const timedValue = useDebounce(inputSearch, 1000);
	const { data: alsCompoundData, isLoading: alsCompoundDataIsloading } =
		useGetAllCompounds();

	const {
		data: singleAlsCompoundData,
		isLoading: singleAlsCompoundDataIsLoading,
	} = useGetSingleBreastCancer({
		q: `${timedValue}`,
	});

	const alsColumn: ColumnDef<IAlsProps>[] = [
		{
			accessorKey: "canonicalSmiles",
			size: 10,

			cell: ({ getValue }) => {
				return (
					<HStack w="350px" overflowX="scroll">
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "formula",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "molecularWeight",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "molarRefractivity",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text textTransform="capitalize">
							{getValue() as unknown as string}
						</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "bbbPermeant",
			size: 10,

			cell: (info) => info.getValue(),
		},
		{
			accessorKey: "lipinski",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
	];

	const tableData = useMemo(() => {
		return (alsCompoundData && singleAlsCompoundData)?.data?.alsCompounds?.map(
			(item: AlsCompoundsDataProps) => ({
				id: item._id,
				canonicalSmiles: item.canonicalSmiles,
				formula: item.formula,
				molecularWeight: item.molecularWeight,
				molarRefractivity: item.molarRefractivity,
				bbbPermeant: item.bbbPermeant,
				lipinski: item.lipinski,
			})
		);
	}, [alsCompoundData, singleAlsCompoundData]);

	const pieChartFormattedData = formatData(alsCompoundData?.data?.alsCompound);

	const chartDataPie: ChartData = {
		labels: [
			"Canonical Smiles",
			"Formula",
			"Molecular Weight",
			"Molar Refractivity",
			"BBB Permeant",
			"Lipinski",
		],
		datasets: [
			{
				label: "# of Data",
				data: [
					pieChartFormattedData.canonicalSmiles?.length?.toString(),
					pieChartFormattedData.formula?.length?.toString(),
					pieChartFormattedData.molecularWeight?.length?.toString(),
					pieChartFormattedData.molarRefractivity?.length?.toString(),
					pieChartFormattedData.bbbPermeant?.length?.toString(),
					pieChartFormattedData.lipinski?.length?.toString(),
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(13, 02, 225, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(13, 02, 225, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const chartOptsPie: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
				display: true,
			},
		},
	};

	return (
		<Box
			bgImage="linear-gradient(180deg, rgb(11 11 15)  10.88%,  rgba(11, 11, 15, 0.9)  44.5%, rgb(11 11 15)   100%), url('/assets/images/hero_bg.png')"
			bgRepeat="no-repeat"
			bgPos="top"
			bgSize="cover"
		>
			<Box
				maxW="1200px"
				mx="auto"
				px="2rem"
				pt={["10rem", "10rem", "15rem", "15rem"]}
				pb="2rem"
				h={["auto", "50vh", "50vh", "50vh", "50vh"]}
			>
				<Box
					mt={["-1rem", "-2rem", "-2rem"]}
					fontWeight="700"
					letterSpacing=".2rem"
				>
					<Text
						color="brand.white100"
						fontSize={["2rem", "2.5rem", "2.5rem", "3rem"]}
						py="2rem"
						textAlign="center"
					>
						Explore diverse ALS datasets to identify potential druglike
						treatment
					</Text>
					<Input
						id="text"
						border="1px solid"
						onChange={(e: { target: { value: string } }) =>
							setInputSearch(e.target.value.toLowerCase())
						}
					/>
					<Text
						fontSize="1rem"
						color="brand.gray100"
						mx="auto"
						w={["100%", "100%", "90%", "70%"]}
						mt=".5rem"
					>
						Note: You can search based on either commonName, geneId,
						orientation, symbol, taxId, taxname, type
					</Text>
				</Box>
			</Box>
			<Box bg="brand.white300">
				<Box maxW="1200px" mx="auto" px="2rem" py="2rem">
					<Box>
						{alsCompoundDataIsloading || singleAlsCompoundDataIsLoading ? (
							<TableLoader />
						) : (
							<Fragment>
								{alsCompoundData?.data?.breastCancers?.length !== 0 ? (
									<Box>
										<Text
											fontSize="2rem"
											fontWeight="800"
											textAlign="center"
											mb="2rem"
										>
											Tabular Visualization
										</Text>
										<CustomTableLayout
											{...{ columns: alsColumn, data: tableData }}
										/>
									</Box>
								) : (
									<Center>
										<Text>No data available, Check back later!</Text>
									</Center>
								)}
							</Fragment>
						)}
					</Box>

					{alsCompoundDataIsloading || singleAlsCompoundDataIsLoading ? (
						<Center mt="8rem">
							<VStack w="100%">
								<TextLoader />
								<LongRectangleCardLoader />
								<CircleCardLoader size={["30rem", "50rem", "50rem", "50rem"]} />
							</VStack>
						</Center>
					) : (
						<PieChart {...{ data: chartDataPie, options: chartOptsPie }} />
					)}
				</Box>
			</Box>
		</Box>
	);
};

export { Hero };
