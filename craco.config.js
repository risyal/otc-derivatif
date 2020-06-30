const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#a0d911',
                            /* '@menu-dark-selected-item-icon-color': '#6fab3e',
                            '@menu-dark-selected-item-text-color': '#6fab3e', 
                            '@menu-collapsed-width': '64px'
                            '@layout-sider-background': '#008000',
                            '@menu-dark-submenu-bg': '#108d0b',
                            '@layout-header-background': 'linear-gradient(to right, rgba(255,0,0,0), #008000)',
                            '@menu-dark-bg': '#008000', */
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};