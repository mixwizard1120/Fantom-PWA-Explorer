const appConfig = {
    // app title
    name: 'Fantom Explorer',
    // apollo client settings
    apollo: {
        // list of providers. if one of them is unavailable, another is randomly picked
        providers: [
            {
                http: 'https://api.fantom.rocks/api',
                // for subscriptions
                ws: ''
            }
        ],
        // index into providers array of default provider
        defaultProviderIndex: 0
    },
    // progressive web application
    usePWA: true,
    // pwa settings
    pwa: {
        // name used in pwa manifest
        name: 'Fantom Explorer'
    },
    // default options for production build
    build: {
        // output dir for production build
        outputDir: 'dist'
    }
};

// scss variables prepended to every scss file
appConfig.scssData = `
    @import "src/assets/scss/vars";
`;

module.exports = appConfig;