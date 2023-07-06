import {
	Box,
	chakra,
	Circle,
	HStack,
	IconButton,
	Table as CTable,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Center,
	Select,
} from "@chakra-ui/react";
import {
	flexRender,
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Table = chakra(CTable);
const TableHead = chakra(Thead);
const TableBody = chakra(Tbody);
const TableRow = chakra(Tr);
const TableH = chakra(Th);
const TableD = chakra(Td);

const CustomTableLayout = (props: any) => {
	const data = useMemo(() => props.data, [props.data]);
	const columns = useMemo(() => props.columns, [props.columns]);

	const {
		getHeaderGroups,
		getRowModel,
		getPageCount,
		getState,
		getCanNextPage,
		nextPage,
		getCanPreviousPage,
		previousPage,
		setPageSize,
	} = useReactTable({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<Box border={"1px solid"} borderColor="brand.gray100" rounded={"1rem"}>
			{props.data?.length ? (
				<Box>
					<Box
						borderBottom={"1px solid"}
						borderColor="brand.gray100"
						minH={"40rem"}
						overflowX="scroll"
					>
						<Table
							bg={"inherit"}
							maxW="full"
							overflow={"hidden"}
							rounded={"1rem"}
						>
							<TableHead w={"100%"}>
								{getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((Hcolumn) => (
											<TableH
												key={Hcolumn.id}
												w={`${Hcolumn.getSize()}rem` ?? "auto"}
												py={"2rem"}
												color={"brand.gray100"}
												fontFamily="'Syne', sans-serif"
												fontSize={["1.2rem", "1.2rem", "1.2rem", "1.4rem"]}
												fontWeight="700"
												textTransform={"capitalize"}
												{...(
													Hcolumn.column.columnDef.meta as Record<string, any>
												)?.THstyle}
											>
												{Hcolumn.isPlaceholder
													? null
													: flexRender(
															Hcolumn.column.columnDef.header,
															Hcolumn.getContext()
													  )}
											</TableH>
										))}
									</TableRow>
								))}
							</TableHead>
							<TableBody fontSize={"1.2rem"}>
								{getRowModel().rows.map((row) => (
									<TableRow py={"1.6rem"} key={row.id}>
										{row.getVisibleCells().map((cell) => {
											return (
												<TableD
													key={cell.id}
													w={`${cell.column.getSize()}rem` ?? "auto"}
													lineHeight={"1.8rem"}
													py="1rem"
													fontWeight="400"
													fontSize={["1.2rem", "1.2rem", "1.2rem", "1.4rem"]}
													color="brand.gray100"
													{...(
														cell.column.columnDef.meta as Record<string, any>
													)?.TDstyle}
												>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</TableD>
											);
										})}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Box>
					<HStack
						p={"2rem"}
						spacing={"1rem"}
						justify={"space-between"}
						w={"full"}
					>
						<HStack fontSize={["1.2rem", "1.2rem", "1.2rem", "1.4rem"]}>
							<Text>
								Showing page {getState().pagination.pageIndex + 1} of{" "}
								{getPageCount()} result(s)
							</Text>

							<Box>
								<Select
									border="1px solid"
									borderRadius=".5rem"
									px=".5rem"
									cursor="pointer"
									value={getState().pagination.pageSize}
									onChange={(e) => {
										setPageSize(Number(e.target.value));
									}}
									_focusVisible={{ border: "none", borderColor: "transparent" }}
								>
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<option key={pageSize} value={pageSize}>
											Show {pageSize}
										</option>
									))}
								</Select>
							</Box>
						</HStack>

						<HStack spacing={"2rem"}>
							<Circle
								onClick={() => previousPage()}
								size="3.5rem"
								fontSize="2.5rem"
								as={IconButton}
								icon={<FiChevronLeft />}
								aria-label="prev"
								rounded="full"
								bg="brand.dark200"
								color="brand.white100"
								_hover={{ bg: "brand.dark200" }}
								isDisabled={!getCanPreviousPage()}
							/>

							<Circle
								onClick={() => nextPage()}
								as={IconButton}
								icon={<FiChevronRight />}
								fontSize="2.5rem"
								aria-label="next"
								rounded="full"
								size="3.5rem"
								bg="brand.dark200"
								color="brand.white100"
								_hover={{ bg: "brand.dark200" }}
								isDisabled={!getCanNextPage()}
							/>
						</HStack>
					</HStack>
				</Box>
			) : (
				<Center>
					<Text>No data available, Check back later!</Text>
				</Center>
			)}
		</Box>
	);
};

export { CustomTableLayout };
