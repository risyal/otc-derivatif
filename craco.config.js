const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#6fab3e',
                            '@layout-sider-background': '#008000',
                            '@menu-dark-submenu-bg': '#108d0b',
                            '@layout-header-background': 'linear-gradient(to right, rgba(255,0,0,0), #008000)',
                            '@menu-dark-bg': '#008000',
                            '@layout-header-height': '80px'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};