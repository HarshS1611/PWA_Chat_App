module.exports = {
    globDirectory: 'public/',
    globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [{
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
        },
      },
    }],
   };