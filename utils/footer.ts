import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FooterProps } from "@/interfaces/layout";

export const SocialLinks: FooterProps[] = [
	{
		name: "GitHub",
		icon: BsGithub,
		url: "https://github.com/Sproff/als-druglike-compounds",
	},
	{
		name: "LinkedIn",
		icon: BsLinkedin,
		url: "https://linkedin.com/in/sam-ogunleye/",
	},
	{
		name: "Twitter",
		icon: BsTwitter,
		url: "https://twitter.com/dev_sproff",
	},
];
