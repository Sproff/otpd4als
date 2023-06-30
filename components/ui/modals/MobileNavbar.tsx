import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { headerData } from "@/utils/header";
import Link from "next/link";
import { Fragment } from "react";

const MobileNavbar = () => {
	return (
		<Box
			bg="brand.white200"
			h="100%"
			pos="fixed"
			top="5.9rem"
			left="0"
			w="100%"
			zIndex="99"
		>
			<Box
				bg="brand.white100"
				mt="0rem"
				p="2rem"
				w="100%"
				borderBottomLeftRadius=".6rem"
				borderBottomRightRadius=".6rem"
			>
				<HStack
					alignItems="left"
					display={["block", "block", "block", "none"]}
					justifyContent="space-between"
					fontSize="1.7rem"
					fontWeight="500"
					spacing={0}
				>
					{headerData.map((item, idx) => {
						return (
							<Fragment key={idx}>
								<Link href={item.url || ""}>
									<Flex
										align="center"
										justify="left"
										columnGap="2rem"
										my="3rem"
									>
										<Icon
											as={item.icon}
											color="brand.gold200"
											w="2rem"
											h="2rem"
										/>
										<Text
											textAlign="left"
											color="brand.gray100"
											_hover={{
												color: "brand.gold200",
											}}
										>
											{item.title}
										</Text>
									</Flex>
								</Link>
							</Fragment>
						);
					})}
				</HStack>
			</Box>
		</Box>
	);
};

export { MobileNavbar };
