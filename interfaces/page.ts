import { IconType } from "react-icons";

export interface IProps {
	children: React.ReactNode;
}

export interface FeaturesProps {
	icon: IconType;
	name: string;
	desc: string;
}

export interface AlsCompoundsDataProps {
	[key: string]: string;
	_id: string;
	canonicalSmiles: string;
	formula: string;
	molecularWeight: string;
	molarRefractivity: string;
	bbbPermeant: string;
	lipinski: string;
}
