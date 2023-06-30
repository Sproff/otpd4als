import { Input as CInput, InputGroup, Stack } from "@chakra-ui/react";
import { InputProps } from "@/interfaces/template";

export const Input = ({
	value,
	onChange,
	color,
	bg,
	border,
	id,
	isDisabled = false,
}: InputProps) => {
	return (
		<Stack
			spacing=".3rem"
			w={["100%", "100%", "90%", "70%"]}
			align="flex-start"
			mx="auto"
		>
			<InputGroup>
				<CInput
					id={id}
					defaultValue={value}
					placeholder="Search based on either commonName, geneId, orientation, symbol, taxId, taxname, type"
					type="text"
					bg={bg || ""}
					color={color || "brand.gray100"}
					border={border || "none"}
					borderColor="brand.white100"
					borderRadius=".6rem"
					fontSize="1.6rem"
					fontWeight="400"
					py="2.3rem"
					isDisabled={isDisabled}
					_focus={{
						borderColor: "brand.gray100",
					}}
					_focusVisible={{
						boxShadow: "none",
					}}
					_placeholder={{
						color: "brand.gray100",
					}}
					{...{ onChange }}
				/>
			</InputGroup>
		</Stack>
	);
};
