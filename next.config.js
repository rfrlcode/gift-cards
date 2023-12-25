module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dealshq.xyz",
        port: "", // Specify the port if required, otherwise leave it as an empty string
        pathname: "/**", // This will allow all paths from this domain
      },
      {
        protocol: "https",
        hostname: "images.referralhub.xyz",
        port: "", // Specify the port if required, otherwise leave it as an empty string
        pathname: "/**", // This will allow all paths from this domain
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "", // Specify the port if required, otherwise leave it as an empty string
        pathname: "/**", // This will allow all paths from this domain
      },
      // You can add more patterns here if you have images from other domains
    ],
  },
  // ... any other existing configuration
};
