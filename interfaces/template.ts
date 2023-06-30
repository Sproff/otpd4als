export interface ButtonProps {
	text: string;
	bg: string;
	color: string;
	border?: string;
	borderRadius?: string;
	borderColor?: string;
	px: string | string[];
	py?: string;
	w?: string | string[];
	fontSize?: string;
	bgHover: string;
	colorHover?: string;
	isDisabled?: boolean;
	onClick?: () => void;
}

export interface FormValues {
	fullname: string;
	desc: string;
}

export interface InputProps {
	id: string;
	value?: string | number;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	color?: string;
	placeholderColor?: string;
	bg?: string;
	border?: string;
	isDisabled?: boolean;
}
