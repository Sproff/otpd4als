import { Box, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box bg="brand.white300" id="about">
			<Box maxW="1200px" mx="auto" py="8rem" px="2rem">
				<Text
					textAlign="center"
					fontSize="2.5rem"
					fontWeight="800"
					color="brand.gray100"
					letterSpacing=".05rem"
				>
					About
				</Text>

				<Box mt="5rem">
					<Text fontSize={["1.6rem", "1.6rem", "1.7rem"]}>
						We are a passionate team of scientists and innovators dedicated to
						empowering the ALS research community. Our advanced database serves
						as a catalyst, simplifying and accelerating the screening process
						for anti-ALS druglike compounds, ultimately advancing the quest for
						effective treatments.
						<br />
						<br />
						With our extensive expertise in database management and
						pharmaceutical research, we&apos;ve developed a revolutionary
						platform that drives breakthroughs in ALS treatment discovery.
						Together, let&apos;s transform the immense potential into tangible
						progress and bring renewed hope to those affected by ALS.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export { About };
