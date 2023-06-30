import {
	Box,
	Container,
	Flex,
	Icon,
	Link as CLink,
	Text,
} from "@chakra-ui/react";
import { SocialLinks } from "@/utils/footer";
import { Fragment } from "react";

const Footer = () => {
	const updateYear = new Date();

	return (
		<Fragment>
			<Box bg="linear-gradient(180deg, rgb(11 11 15) 10.88%, rgb(11 11 15) 44.5%, rgb(11 11 15) 100%)">
				<Container
					maxW="1200px"
					mx="auto"
					px="2rem"
					py="7rem"
					fontSize="1.5rem"
				>
					<Flex
						justify="space-between"
						w="100%"
						flexDir={["column", "column", "row"]}
					>
						<Box w={["100%", "100%", "50%"]}>
							<Text
								color="brand.white100"
								fontWeight="800"
								fontSize={["1.5rem", "2rem"]}
							>
								ALS DataLink
							</Text>

							<Box color="brand.gray100" mt="2rem">
								{SocialLinks.map((item, idx) => {
									return (
										<CLink key={idx} href={item.url} isExternal>
											<Flex align="center" mb="1rem">
												<Icon
													mt=".2rem"
													fontSize="1.7rem"
													fontWeight="300"
													as={item.icon}
												/>
												<Text ml="1rem">{item.name}</Text>
											</Flex>
										</CLink>
									);
								})}
							</Box>
						</Box>
					</Flex>

					<Box mt="7rem">
						<Text
							color="brand.gray100"
							textAlign={["left", "center"]}
							fontSize="1.5rem"
							fontWeight="300"
						>
							© {updateYear.getFullYear()} Sproff. All rights reserved
						</Text>
					</Box>
				</Container>
			</Box>
		</Fragment>
	);
};

export { Footer };
