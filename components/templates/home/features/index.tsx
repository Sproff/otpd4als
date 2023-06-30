import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { SiMicrogenetics } from "react-icons/si";
import { FaBacteria } from "react-icons/fa";
import { BiDna } from "react-icons/bi";
import { FeaturesProps } from "@/interfaces/page";

const Features = () => {
	const featuresData: FeaturesProps[] = [
		{
			icon: SiMicrogenetics,
			name: "Gene expression data",
			desc: "Specific mutations in genes such as BRCA1 and BRCA2 are known to increase the risk of developing breast cancer. Measuring the activity of different genes in breast cancer cells and comparing them to normal cells can provide insights into the mechanisms underlying cancer development and progression.",
		},
		{
			icon: BiDna,
			name: "DNA sequencing data",
			desc: "The genome of the SARS-CoV-2 virus responsible for COVID-19 is composed of RNA, which can be converted into DNA for sequencing purposes. DNA sequencing data can provide information on the sequence of the virus's genome, including mutations and variations that may affect its transmission, virulence, and response to treatment.",
		},
		{
			icon: FaBacteria,
			name: "Microbiome genomic data",
			desc: "Genomic data of the microbiome - the collection of microorganisms that live in and on the human body - is being studied to understand how these microorganisms affect human health and disease. Example include Skin microbiome genomic data",
		},
	];
	return (
		<Box bg="brand.white200">
			<Box maxW="1200px" mx="auto" py="8rem" px="2rem">
				<Text
					textAlign="center"
					fontSize={["2rem", "2rem", "2.5rem"]}
					fontWeight="800"
					color="brand.gray100"
					letterSpacing=".05rem"
				>
					Feature Integrations
				</Text>

				<SimpleGrid columns={[1, 2, 2, 2, 3, 3]} spacing={20} mt="5rem">
					{featuresData.map((item, idx) => (
						<Box key={idx}>
							<Icon
								color="brand.gray100"
								fontSize="3.5rem"
								fontWeight="300"
								as={item.icon}
							/>
							<Text fontSize={["2rem", "2rem", "2.2rem"]} fontWeight="600">
								{item.name}
							</Text>
							<Text fontSize={["1.6rem", "1.6rem", "1.7rem"]}>{item.desc}</Text>
						</Box>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export { Features };
