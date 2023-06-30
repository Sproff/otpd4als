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
} from "@chakra-ui/react";
import {
	flexRender,
	useReactTable,
	getCoreRowModel,
	PaginationState,
	ExpandedState,
	getExpandedRowModel,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
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
	const [rowSelection, setRowSelection] = useState({});

	const [{ pageIndex, pageSize }] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const [expanded, setExpanded] = React.useState<ExpandedState>({});

	const pagination = React.useMemo(
		() => ({
			pageIndex,
			pageSize,
		}),
		[pageIndex, pageSize]
	);

	const {
		getHeaderGroups,
		getRowModel,
		getPageCount,
		getCanNextPage,
		nextPage,
		getCanPreviousPage,
		previousPage,
	} = useReactTable({
		columns,
		data,
		state: { expanded, pagination, rowSelection },
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		onRowSelectionChange: setRowSelection,
		onExpandedChange: setExpanded,
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
						<Box>
							<Text fontSize={["1.2rem", "1.2rem", "1.2rem", "1.4rem"]}>
								Showing{" "}
								{props.currentPage === 1 ? "1" : `${pageSize * pageIndex + 1}`}{" "}
								- {pageIndex === 0 ? data.length : props.count} of {data.length}{" "}
								result(s)
							</Text>
						</Box>

						<HStack spacing={"1rem"}>
							<Circle
								onClick={() => previousPage()}
								size={"3.5rem"}
								fontSize={"2.5rem"}
								as={IconButton}
								icon={<FiChevronLeft />}
								aria-label="prev"
								rounded={"full"}
								bg={"none"}
								disabled={!getCanPreviousPage()}
								colorScheme={"none"}
								color={"brand.gray100"}
							/>
							{[...Array.from({ length: getPageCount() }, (_, v) => v + 1)].map(
								(no: number) => {
									return (
										<Circle
											key={no}
											size={"3.5rem"}
											cursor={"pointer"}
											{...(no === props.currentPage
												? {
														bg: "brand.dark100",
														color: "brand.white100",
												  }
												: {
														bg: "brand.dark100",
														color: "brand.white100",
												  })}
										>
											{no}
										</Circle>
									);
								}
							)}

							<Circle
								onClick={() => nextPage()}
								as={IconButton}
								icon={<FiChevronRight />}
								fontSize={"2.5rem"}
								aria-label="next"
								rounded={"full"}
								size="3.5rem"
								bg={"none"}
								colorScheme={"none"}
								color={"brand.gray100"}
								disabled={!getCanNextPage()}
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
