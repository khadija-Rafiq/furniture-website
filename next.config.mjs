//import { hostname } from 'os';

// /** @type {import('next').NextConfig} */
// const nextConfig = {images:{remotepattern:[{(hostname:"cdn.Sanity.io")}]}};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '', // Leave blank if not using a specific port
          pathname: '/images/**', // Match all image paths
        },
      ],
    },
  };
  
  export default nextConfig;
  
