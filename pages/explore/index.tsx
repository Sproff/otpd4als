import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/templates/explore";
import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";

const ExplorePage: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>Genomic data visualization</title>
				<meta
					name="description"
					content="Genomic data visualization | Creating visual representations of genomic data, such as DNA sequences, genetic mutations, and gene expression patterns. Explore diverse genomic datasets to identify potential biomarkers and treatment targets. Regularly updated."
				/>
			</Head>

			<MainLayout>
				<Hero />
			</MainLayout>
		</Box>
	);
};

export default ExplorePage;
