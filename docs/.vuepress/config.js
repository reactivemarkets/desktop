module.exports = {
    base: "/",
    title: "Desktop",
    description: "Desktop by Reactive Markets",
    head: [
        ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" }],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
        ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#4A90E2" }],
        ["meta", { name: "theme-color", content: "#4A90E2" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
    ],
    plugins: [
        "@vuepress/active-header-links",
        "@vuepress/back-to-top",
        "@vuepress/medium-zoom",
        "@vuepress/nprogress",
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
                generateSWConfig: {
                    importWorkboxFrom: "local"
                }
            }
        ]
    ],
    themeConfig: {
        docsDir: "docs",
        editLinks: true,
        lastUpdated: "Last Updated",
        logo: "/icon-256.png",
        nav: [
            {
                text: "Guide",
                link: "/guide/",
            },
            {
                text: "Config Reference",
                link: "/config/",
            },
            {
                text: "SDK",
                link: "/sdk/",
            },
            {
                text: "CLI",
                link: "/cli/",
            },
            {
                text: "Support",
                link: "/support/",
            }
        ],
        repo: "reactivemarkets/desktop",
        sidebar: {
            "/config/": [
                {
                    title: "Reference",
                    collapsable: false,
                    children: [
                        "",
                    ],
                },
                {
                    title: "Definitions",
                    collapsable: false,
                    children: [
                        "metadata/",
                        "application/",
                        "applicationSecurityPolicy/",
                        "external/",
                        "externalSecurityPolicy/",
                        "service/",
                        "serviceSecurityPolicy/",
                        "session/",
                        "storage/",
                        "tray/",
                        "updatePolicy/",
                    ],
                }
            ],
            "/sdk/": [
                {
                    title: "SDK",
                    collapsable: false,
                    children: [
                        "",
                    ],
                },
                {
                    title: "Objects",
                    collapsable: false,
                    children: [
                        "desktop/",
                        "globalshortcut/",
                        "launcher/",
                        "logger/",
                        "registry/",
                        "router/",
                        "screen/",
                        "window/",
                    ],
                }
            ],
            "/cli/": [{
                    title: "CLI",
                    collapsable: false,
                    children: [
                        "",
                        {
                            title: "Commands",
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                "/cli/clear/",
                                "/cli/describe/",
                                "/cli/devtools/",
                                "/cli/hide/",
                                "/cli/info/",
                                "/cli/init/",
                                "/cli/kill/",
                                "/cli/logs/",
                                "/cli/ps/",
                                "/cli/restart/",
                                "/cli/show/",
                                "/cli/shutdown/",
                                "/cli/start/",
                                "/cli/stop/",
                                "/cli/version/",
                            ]
                        }
                    ]
                }
            ]
        },
        smoothScroll: true,
    },
}
