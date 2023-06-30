import { Html, Head, Main, NextScript } from "next/document";

const GenomicBreastCancer = () => {
	const title = "Genomic data visualization";
	const description =
		"Genomic data visualization | Creating visual representations of genomic data, such as DNA sequences, genetic mutations, and gene expression patterns. Explore diverse genomic datasets to identify potential biomarkers and treatment targets. Regularly updated.";
	const ogImageUrl = "/og-image.png";
	const twitterHandle = "@dev_sproff";

	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/android-chrome-512x512.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				<link rel="canonical" href="https://genomic-breast-cancer.vercel.app" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>

				{/* Open Graph tags */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={ogImageUrl} />
				<meta
					property="og:url"
					content="https://genomic-data-visualization.vercel.app"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content={ogImageUrl} />

				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={twitterHandle} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={ogImageUrl} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default GenomicBreastCancer;
