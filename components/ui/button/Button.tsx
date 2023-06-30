import { Box, Button } from "@chakra-ui/react";
import { ButtonProps } from "@/interfaces/template";

const CustomButton = ({
	text,
	bg,
	color,
	border,
	borderRadius,
	borderColor,
	px,
	py,
	w,
	fontSize,
	bgHover,
	colorHover,
	isDisabled,
	onClick,
}: ButtonProps) => {
	return (
		<Box w={w ?? "auto"}>
			<Button
				onClick={onClick}
				bg={bg}
				color={color}
				px={px}
				py={py ?? ["2rem", "2.5rem"]}
				w={w ?? "auto"}
				fontSize={fontSize ?? ["1.3rem", "1.3rem", "1.5rem"]}
				fontWeight="500"
				borderRadius={borderRadius ?? ".6rem"}
				border={border}
				borderColor={borderColor}
				disabled={isDisabled}
				pointerEvents={isDisabled ? "none" : "auto"}
				_hover={{ bg: bgHover, color: colorHover }}
			>
				{text}
			</Button>
		</Box>
	);
};

export { CustomButton };
