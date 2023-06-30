import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/templates/explore";
import { MainLayout } from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";

const ExplorePage: NextPage = () => {
	return (
		<Box>
			<Head>
				<title>ALS Data Revolution: Unleash the Cure</title>
				<meta
					name="description"
					content="ALS Data Revolution: Unleash the Cure"
				/>
			</Head>

			<MainLayout>
				<Hero />
			</MainLayout>
		</Box>
	);
};

export default ExplorePage;
