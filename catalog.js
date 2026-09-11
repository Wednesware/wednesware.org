window.WEDNESWARE_CATALOG = {
    publications: [
        {
            title: "Lithium",
            color: "lithium",
            type: "Publication",
            category: "publications",
            description: "Helium-based Perkeo programming language interpreter and runtime ecosystem.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Lithium",
            tags: [{ label: "Language ecosystem" }],
            installMethods: [
                { command: "pipx install wwli", note: "recommended" },
                { command: "n2 get lithium", note: "library only" }
            ],
            buttons: [
                { label: "PyPI", href: "https://pypi.org/project/wwli/" },
                { label: "AUR", href: "https://aur.archlinux.org/packages/li" }
            ]
        },
        {
            title: "Nitrogen",
            color: "nitrogen",
            type: "Publication",
            category: "publications",
            description: "Fast installer for official Wednesware publications.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Nitrogen",
            tags: [{ label: "Installer" }],
            installMethods: [
                { command: "pipx install wwn", note: "recommended" },
                { command: "n2 get nitrogen", note: "library only" }
            ],
            buttons: [
                { label: "PyPI", href: "https://pypi.org/project/wwn/" },
                { label: "AUR", href: "https://aur.archlinux.org/packages/n2" }
            ]
        },
        {
            title: "Magnesium",
            color: "magnesium",
            type: "Publication",
            category: "publications",
            description: "Utilities for logging, config, path handling and rich data operations.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Magnesium",
            tags: [{ label: "Core library" }],
            codeChip: "n2 get magnesium"
        },
        {
            title: "Helium",
            color: "helium",
            type: "Publication",
            category: "publications",
            description: "Create modular publications and script-based runtimes with less boilerplate.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Helium",
            tags: [{ label: "Publication toolkit" }],
            codeChip: "n2 get helium"
        },
        {
            title: "Hydrogen",
            color: "hydrogen",
            type: "Publication",
            category: "publications",
            description: "Sourcegen-based Distrobase installer.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Hydrogen",
            tags: [{ label: "Distributions" }],
            codeChip: "pipx install wwh"
        },
        {
            title: "Neon",
            color: "neon",
            type: "Publication",
            category: "publications",
            description: "Terminal animation toolkit for expressive, polished command-line interfaces.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Neon",
            tags: [{ label: "DX" }],
            codeChip: "n2 get neon"
        },
        {
            title: "Oxygen",
            color: "oxygen",
            type: "Publication",
            category: "publications",
            description: "Official installer for Perkeo ports of existing publications.",
            status: "wip",
            statusLabel: "IN DEVELOPMENT",
            github: "https://github.com/Wednesware/Oxygen",
            tags: [{ label: "Perkeo libraries" }],
            codeChip: "pipx install wwo"
        },
        {
            title: "Fluorine",
            color: "fluorine",
            type: "Publication",
            category: "publications",
            description: "Webpage framework with built-in structuring, styling, and scripting capabilities.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Fluorine",
            tags: [{ label: "Webdev" }],
            codeChip: "n2 get fluorine"
        },
        {
            title: "Sulfur",
            color: "sulfur",
            type: "Publication",
            category: "publications",
            description: "Library for desktop app development.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Sulfur",
            tags: [{ label: "Desktop apps" }],
            codeChip: "n2 get sulfur"
        },
        {
            title: "Sodium",
            color: "sodium",
            type: "Publication",
            category: "publications",
            description: "Extension framework to Helium offering various utilities and resources for text-based game development.",
            status: "wip",
            statusLabel: "IN DEVELOPMENT",
            github: "https://github.com/Wednesware/Sodium",
            tags: [{ label: "Helium games" }],
            codeChip: "n2 get sodium"
        },
        {
            title: "Arsenic",
            color: "arsenic",
            type: "Publication",
            category: "publications",
            description: "Framework and CLI for custom Python syntax and executables.",
            status: "wip",
            statusLabel: "IN DEVELOPMENT",
            github: "https://github.com/Wednesware/Arsenic",
            tags: [{ label: "Custom Python" }],
            codeChip: "n2 get arsenic"
        },
        {
            title: "Iodine",
            color: "iodine",
            type: "Publication",
            category: "publications",
            description: "Smart terminal input widgets for professional command-line interaction.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Iodine",
            tags: [{ label: "Terminal input" }],
            codeChip: "n2 get iodine"
        }
    ],
    projects: [
        {
            title: "Perkeo",
            color: "lithium",
            type: "Project",
            category: "projects",
            description: "Modern, lightweight and powerful language for beginners, students, or professionals.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Perkeo",
            tags: [{ label: "PROGRAMMING LANGUAGE", icon: "fa-solid fa-code" }]
        },
        {
            title: "Python Object Notation (PYON)",
            color: "magnesium",
            type: "Project",
            category: "projects",
            description: "Python's equivalent of JSON, built-in with Magnesium's config module.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Magnesium",
            tags: [{ label: "FILE FORMAT", icon: "fa-solid fa-file" }]
        },
        {
            title: "Distrobase",
            color: "hydrogen",
            type: "Project",
            category: "projects",
            description: "Open platform for hosting and distributing software online through namespaces.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Distrobase",
            tags: [{ label: "REGISTRY", icon: "fa-solid fa-inbox" }]
        },
        {
            title: "Sourcegen",
            color: "nitrogen",
            type: "Project",
            category: "projects",
            description: "A lightweight starter template for building Nitrogen-based installers with extension and LEN support out of the box.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Sourcegen",
            tags: [{ label: "TEMPLATE", icon: "fa-solid fa-copy" }],
            codeChip: "gh repo fork Wednesware/Sourcegen --clone"
        },
        {
            title: "Document2.0",
            color: "generic",
            type: "Project",
            category: "projects",
            description: "A template and format for modern in-depth documentation.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Document2.0",
            tags: [{ label: "TEMPLATE", icon: "fa-solid fa-copy" }],
            codeChip: "gh repo create my-repo --template Wednesware/Document2.0 --public"
        }
    ],
    distros: [
        {
            title: "Reskedule",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "Coming soon...",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./reskedule",
            tags: [
                { label: "GAME", icon: "fa-solid fa-gamepad" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Grapple",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "Easily send, edit and delete rich Discord webhook messages, including embeds, polls, buttons, mentions, and much more, directly from a terminal or script.",
            status: "wip",
            statusLabel: "IN DEVELOPMENT",
            github: "./grapple",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "FRAMEWORK/LIBRARY", icon: "fa-solid fa-code" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Atmosphere",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "Browse, post, and interact on Bluesky entirely from your terminal using Atmosphere.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./atmosphere",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "PRODUCTIVITY", icon: "fa-solid fa-bolt" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Studio",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "VSCode fork with built-in support for several useful Wednesware features like Nitrogen and Helium.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./studio",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "PRODUCTIVITY", icon: "fa-solid fa-bolt" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Airship",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "CLI for managing Helium projects and Nitrogen flows dynamically.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./airship",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "PRODUCTIVITY", icon: "fa-solid fa-bolt" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Modmancer",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "CLI for creating and packaging Helium mods.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./modmancer",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "PRODUCTIVITY", icon: "fa-solid fa-bolt" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Voltage",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "CLI for task automation and scheduling.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "./voltage",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "PRODUCTIVITY", icon: "fa-solid fa-bolt" },
                { label: "AUTOMATION", icon: "fa-solid fa-robot" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        }
    ]
};

window.WEDNESWARE_CATALOG.all = [
    ...window.WEDNESWARE_CATALOG.publications,
    ...window.WEDNESWARE_CATALOG.projects,
    ...window.WEDNESWARE_CATALOG.distros
];

window.WEDNESWARE_ITEMS = window.WEDNESWARE_CATALOG.all;
