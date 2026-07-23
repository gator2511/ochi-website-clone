import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en-AU">
			<Head>
				<link rel="icon" href="/logo.svg" type="image/svg+xml" />
				<link rel="shortcut icon" href="/logo.svg" />
				<meta name="theme-color" content="#ff4b00" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
