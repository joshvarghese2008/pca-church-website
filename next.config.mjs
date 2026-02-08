
 
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
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aqmnhjjxngwieybliscv.supabase.co',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;