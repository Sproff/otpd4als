import { IconType } from "react-icons";

export interface HeaderProps {
	icon: IconType;
	title: string;
	url?: string;
}

export interface FooterProps {
	name: string;
	icon: IconType;
	url: string;
}
