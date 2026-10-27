/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/aboriginal-organisations",
				destination: "/",
				permanent: true,
				statusCode: 301,
			},
		];
	},
};

export default nextConfig;
