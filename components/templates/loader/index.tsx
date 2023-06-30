import {
	Box,
	Center,
	HStack,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Stack,
	Text,
} from "@chakra-ui/react";

const CustomLoader = () => {
	return (
		<Center bg="brand.gold300" h="100vh">
			<Text>Loading...</Text>
		</Center>
	);
};

const TableLoader = () => {
	return (
		<Box bg="brand.white100">
			<HStack w="full" mb="2rem">
				{[1, 2, 3, 4, 5].map((idx) => (
					<Box w="20%}" key={idx}>
						<SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="7" />
					</Box>
				))}
			</HStack>
			<Stack>
				{[1, 2, 3, 4, 5, 6].map((idx) => (
					<Box w="full" key={idx}>
						<Skeleton height="7rem" />
					</Box>
				))}
			</Stack>
		</Box>
	);
};

const CircleCardLoader = ({ size }: { size: string[] }) => {
	return <SkeletonCircle {...{ size }} />;
};

const LongRectangleCardLoader = () => {
	return <Skeleton w={"full"} h={"20px"} />;
};

const TextLoader = ({ noOfLines = 1, mb = "4rem" }) => {
	return (
		<SkeletonText
			startColor="#A0AEC0"
			endColor="#718096"
			w="100%"
			mb={mb}
			noOfLines={noOfLines}
			spacing="4"
			skeletonHeight="4"
			color="brand.gray200"
		/>
	);
};

export {
	CircleCardLoader,
	CustomLoader,
	LongRectangleCardLoader,
	TableLoader,
	TextLoader,
};
