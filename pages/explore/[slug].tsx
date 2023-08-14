import { useGetParticularAlsCompound } from "@/hooks/compounds/useAlsCompound";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const AlsCompoundDetails = () => {
	const { query } = useRouter();

	const { data: alsCompoundData, isLoading: alsCompoundDataIsloading } =
		useGetParticularAlsCompound(query?.slug);

	return (
		<Box>
			<Box
				bgImage="linear-gradient(180deg, rgb(11 11 15)  10.88%,  rgba(11, 11, 15, 0.9)  44.5%, rgb(11 11 15)   100%), url('/assets/images/hero_bg.png')"
				bgRepeat="no-repeat"
				bgPos="top"
				bgSize="cover"
				pt={["10rem", "10rem", "15rem", "15rem"]}
				pb="2rem"
			>
				<Box
					mt={["-1rem", "-2rem", "-2rem"]}
					fontWeight="700"
					letterSpacing=".2rem"
				>
					<Text
						color="brand.white100"
						fontWeight="900"
						fontSize={["2rem", "2.5rem", "2.5rem", "3rem"]}
						py="2rem"
						textAlign="center"
					>
						{alsCompoundDataIsloading
							? "Fetching details.."
							: alsCompoundData?.data?.alsCompound?.molecule}
					</Text>
				</Box>
			</Box>

			{alsCompoundDataIsloading ? null : (
				<Box pb="5rem">
					<Box maxW="1200px" mx="auto" px="2rem" py="5rem">
						<Accordion
							defaultIndex={[0]}
							border=".5px solid"
							borderColor="brand.gray100"
							borderRadius=".9rem"
							overflow="hidden"
							allowMultiple
						>
							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											Physicochemical Properties
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										Canonical Smiles:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.canonicalSmiles}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Formula:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.formula}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Molecular weight:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.molecularWeight}{" "}
											g/mol
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Num. heavy atoms:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.heavyAtoms}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Num. arom. heavy atoms:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.aromaticHeavyAtoms}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Fraction Csp3:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.fractionCsp3}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Num. rotatable bonds:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.rotatableBonds}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Num. H-bond acceptors:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.hBondAcceptors}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Num. H-bond donors:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.hBondDonors}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Molar Refractivity:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.molarRefractivity}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										TPSA:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.tpsa} Å²
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											Lipophilicity
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										Log Po/w (iLOGP):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.iLogP}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Log Po/w (XLOGP3):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.xLogP3}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Log Po/w (WLOGP):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.wLogP}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Log Po/w (MLOGP):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.mLogP}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Log Po/w (SILICOS-IT):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.silicosITLogP}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Consensus Log Po/w:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.ConsensusLogP}
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											Water Solubility
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Box>
										<Text mt="1rem" fontWeight="600">
											Log S (ESOL):{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.esolLogS}
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Solubility:{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.esolSolubilityMgml}{" "}
												mg/ml ;{" "}
												{alsCompoundData?.data?.alsCompound?.aliSolubilityMolL}{" "}
												mol/l
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Class:{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.esolClass}
											</Box>
										</Text>
									</Box>

									<Box mt="2rem">
										<Text mt="1rem" fontWeight="600">
											Log S (Ali):{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.aliSolubilityMgml}
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Solubility:{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.aliSolubilityMgml}{" "}
												mg/ml ;{" "}
												{alsCompoundData?.data?.alsCompound?.aliSolubilityMolL}{" "}
												mol/l
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Class:{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.aliClass}
											</Box>
										</Text>
									</Box>

									<Box mt="2rem">
										<Text mt="1rem" fontWeight="600">
											Log S (SILICOS-IT):{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.silicosITLogSw}
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Solubility:{" "}
											<Box as="span" fontWeight="300">
												{
													alsCompoundData?.data?.alsCompound
														?.silicosITSolubilityMgMl
												}{" "}
												mg/ml ;{" "}
												{
													alsCompoundData?.data?.alsCompound
														?.silicosITSolubilityMolL
												}{" "}
												mol/l
											</Box>
										</Text>
										<Text mt="1rem" fontWeight="600">
											Class:{" "}
											<Box as="span" fontWeight="300">
												{alsCompoundData?.data?.alsCompound?.silicosITClassMolL}
											</Box>
										</Text>
									</Box>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											GI absorption
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										GI absorption:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.giAbsorption}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										BBB permeant :{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.bbbPermeant}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										P-gp substrate:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.pgpSubstrate}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										CYP1A2 inhibitor:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.cyp1a2Inhibitor}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										CYP2C19 inhibitor:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.cyp2c19Inhibitor}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										CYP2C9 inhibitor:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.cyp2c9Inhibitor}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										CYP2D6 inhibitor:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.cyp2d6Inhibitor}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										CYP3A4 inhibitor:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.cyp3a4Inhibitor}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Log Kp (skin permeation):{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.logKpCmS}
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											Druglikeness
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										Lipinski:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.lipinski}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Ghose:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.ghose}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Veber:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.veber}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Egan:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.egan}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Muegge:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.muegge}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Bioavailability Score:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.bioavailabilityScore}
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem borderColor="brand.gray100" border=".1px solid">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											Medicinal Chemistry
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										PAINS:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.pains} alert
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Brenk:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.brenk} alert
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Leadlikeness:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.leadlikeness}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Synthetic accessibility:{" "}
										<Box as="span" fontWeight="300">
											{
												alsCompoundData?.data?.alsCompound
													?.syntheticAccessibility
											}
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Box>

					<Box maxW="1200px" mx="auto" px="2rem">
						<Text fontWeight="700" fontSize="2rem" mb="2rem">
							Mechanisms of Action
						</Text>
						<Accordion
							defaultIndex={[0]}
							allowMultiple
							border="1.5px solid"
							borderColor="brand.gray100"
							borderRadius=".9rem"
						>
							<AccordionItem border="none">
								<h2>
									<AccordionButton
										boxShadow="none"
										fontSize="1.7rem"
										fontWeight="500"
									>
										<Box as="span" flex="1" textAlign="left" fontWeight="700">
											{alsCompoundData?.data?.alsCompound?.molecule || "N/A"}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>

								<AccordionPanel pb={4} fontWeight="400" fontSize="1.5rem">
									<Text mt="1rem" fontWeight="600">
										Mechanism Of Action:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.mechanismOfAction ||
												"N/A"}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Target Name:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.targetName || "N/A"}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										Human Targets:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.humanTargets ||
												"N/A"}
										</Box>
									</Text>
									<Text mt="1rem" fontWeight="600">
										References:{" "}
										<Box as="span" fontWeight="300">
											{alsCompoundData?.data?.alsCompound?.references || "N/A"}
										</Box>
									</Text>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default AlsCompoundDetails;
