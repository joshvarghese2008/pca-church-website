
 
/** @type {import('next').NextConfig} */
const nextConfig = {

    // webpack(webpackConfig) {
    //     return {
    //         ...webpackConfig,
    //         optimization: {
    //             minimize: false,
    //         }
    //     }
    // }
    transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;