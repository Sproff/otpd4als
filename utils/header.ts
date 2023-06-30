import { HeaderProps } from "@/interfaces/layout";
import { BsGithub } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

export const headerData: HeaderProps[] = [
	{
		icon: HiUser,
		title: "About",
		url: "/#about",
	},
	{
		icon: BsGithub,
		title: "GitHub",
		url: "https://github.com/Sproff/als-druglike-compounds",
	},
];
