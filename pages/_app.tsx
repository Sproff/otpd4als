import { ChakraProvider } from "@chakra-ui/react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
} from "chart.js";
import "@/styles/globals.css";
import { customTheme } from "@/styles/themes";
import { CustomLoader } from "@/components/templates/loader";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const App = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [queryClient] = useState(() => new QueryClient());

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps?.dehydratedState}>
				<ReactQueryDevtools initialIsOpen={false} />
				<ChakraProvider theme={customTheme}>
					<Head>
						<title>ALS Data Revolution: Unleash the Cure</title>
						<meta
							name="description"
							content="Discover groundbreaking advancements in ALS drug discovery."
						/>
						<meta name="robots" content="all" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<meta name="mobile-web-app-capable" content="yes" />
						<meta name="msapplication-TileColor" content="#ffffff" />
						<meta name="theme-color" content="#ffffff" />
					</Head>

					{loading ? <CustomLoader /> : <Component {...pageProps} />}
				</ChakraProvider>
			</Hydrate>
		</QueryClientProvider>
	);
};

export default App;
