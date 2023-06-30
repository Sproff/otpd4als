import { Box, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { MobileNavbar } from "@/components/ui/modals/MobileNavbar";
import { headerData } from "@/utils/header";
import { MotionBox } from "@/components/animations/FramerComponents";

const Header = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);
	const { scrollY } = useScroll();
	const [opacity, setOpacity] = useState(0);
	const heroRef = useRef(null);
	const isInView = useInView(heroRef);

	const handleToggle = () => {
		setOpenModal((toggle) => !toggle);
		setActive((prev) => !prev);
	};

	useMotionValueEvent(scrollY, "change", (latest) => {
		setOpacity(latest);
	});

	const framerVariant = {
		initial: {
			background: "rgba(255, 255, 255, 0.8)",
		},
		animate: (idx: number) => ({
			background: isInView
				? idx > 200
					? "rgba(255, 255, 255, 1)"
					: "rgba(255, 255, 255, 0.8)"
				: "rgba(255, 255, 255, 0.8)",
			boxShadow: isInView
				? idx > 200
					? "0px 1px 5px rgb(105 108 128)"
					: "0"
				: "0",
			transition: {
				delay: 0.05,
				duration: 2,
				ease: [0.075, 0.82, 0.165, 1],
			},
		}),
	};

	return (
		<Fragment>
			<MotionBox
				pos={"fixed"}
				top={0}
				w="full"
				zIndex={99}
				custom={opacity}
				variants={framerVariant}
				initial={"initial"}
				animate={"animate"}
			>
				<Box
					ref={heroRef}
					bg="linear-gradient(180deg, rgb(11 11 15) 10.88%, rgb(11 11 15) 44.5%, rgb(11 11 15) 100%)"
				>
					<Container maxW="1200px" mx="auto" px="2rem" py="1.2rem">
						<Flex justify="space-between" align="center">
							<Link href="/">
								<Text
									color="brand.white100"
									fontWeight="800"
									fontSize={["1.5rem", "2rem"]}
								>
									ALS DataLink
								</Text>
							</Link>

							<Flex
								onClick={handleToggle}
								display={["block", "block", "block", "none"]}
								cursor="pointer"
							>
								<Box
									as="span"
									w="2.5rem"
									h=".3rem"
									bg="brand.white100"
									transition="all 0.3s ease-in-out"
									borderRadius="12rem"
									display="block"
									_odd={{
										transform: active
											? "translateY(0.375rem) rotate(45deg)"
											: "",
									}}
								/>
								<Box
									as="span"
									w="1.25rem"
									h=".3rem"
									bg="brand.white100"
									borderRadius="12rem"
									my={active ? "0" : ".5rem"}
									ml="1.25rem"
									opacity={active ? 0 : 1}
									display="block"
								/>
								<Box
									as="span"
									w="2.5rem"
									h=".3rem"
									bg="brand.white100"
									transition="all 0.3s ease-in-out"
									borderRadius="12rem"
									display="block"
									_odd={{
										transform: active
											? "translateY(-0.2125rem) rotate(-45deg)"
											: "",
									}}
								/>
							</Flex>

							<HStack
								display={["none", "none", "none", "flex"]}
								justifyContent="space-between"
								fontSize="1.7rem"
								fontWeight="500"
								spacing="10rem"
								py="2rem"
							>
								{headerData.map((item, idx) => {
									return (
										<Fragment key={idx}>
											<Link href={item.url || ""}>
												<Flex align="center" columnGap="2rem">
													<Icon
														as={item.icon}
														color="brand.gray100"
														w="2rem"
														h="2rem"
													/>
													<Text color="brand.gray100" fontWeight="600">
														{item.title}
													</Text>
												</Flex>
											</Link>
										</Fragment>
									);
								})}
							</HStack>
						</Flex>
					</Container>
				</Box>
			</MotionBox>

			{openModal ? <MobileNavbar /> : null}
		</Fragment>
	);
};

export { Header };
