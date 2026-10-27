/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/aboriginal-organisations",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
