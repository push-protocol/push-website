module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  plugins: [
    [
      'babel-plugin-styled-components', 
      {
        ssr: true, // Enable server-side rendering optimizations
        displayName: true, // Add a helpful displayName to styled components (useful in debugging)
        preprocess: true // Enable/disable preprocessing (can be useful to toggle for debugging)
      }
    ]
  ]
};
