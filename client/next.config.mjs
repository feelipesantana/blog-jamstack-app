/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',

            },
            {
                protocol: 'https',
                hostname: 'wonderful-friends-0b5c5a5de2.media.strapiapp.com',

            },
        ],

    },
};

export default nextConfig;
