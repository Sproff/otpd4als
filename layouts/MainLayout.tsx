import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { IProps } from "@/interfaces/page";

const MainLayout = ({ children }: IProps) => {
	return (
		<Box>
			<Header />
			{children}
			<Footer />
		</Box>
	);
};

export { MainLayout };
