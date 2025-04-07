import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com',
        }]
    }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
