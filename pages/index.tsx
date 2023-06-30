import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { About, Hero } from "@/components/templates/home";
import { NextPage } from "next";

const Home: NextPage = () => {
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
				{/* <Features /> */}
				<About />
			</MainLayout>
		</Box>
	);
};

export default Home;
