import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "@/layouts/MainLayout";
import { About, Hero } from "@/components/templates/home";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>ALS Data Revolution: Unleash the Cure</title>
				<meta
					name="description"
					content="Discover groundbreaking advancements in ALS drug discovery."
				/>
			</Head>

			<MainLayout>
				<Hero />
				<About />
			</MainLayout>
		</Box>
	);
};

export default Home;
