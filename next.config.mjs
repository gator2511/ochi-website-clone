/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/blog",
				destination: "/insights",
				permanent: true,
				statusCode: 301,
			},
		];
	},
};

export default nextConfig;
