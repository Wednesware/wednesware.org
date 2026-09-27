window.WEDNESWARE_CATALOG = {
    publications: [
        {
            title: "Sodium",
            color: "sodium",
            type: "Publication",
            category: "publications",
            description: "General-purpose, scalable programming language with modern features and expressive syntax.",
            status: "live",
            statusLabel: "LIVE IN BETA",
            github: "https://github.com/Wednesware/Sodium",
            tags: [{ label: "Programming language" }],
            installMethods: [
                { command: "n2 get sodium && n2 install sodium", note: "recommended" },
                { command: "n2 get sodium", note: "library only" }
            ]
        },
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
                { label: "PyPI", href: "https://pypi.org/project/wwli/" }
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
                { label: "PyPI", href: "https://pypi.org/project/wwn/" }
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
            installMethods: [
                { command: "pipx install wwh", note: "recommended" },
                { command: "n2 get hydrogen", note: "library only" }
            ],
            buttons: [
                { label: "PyPI", href: "https://pypi.org/project/wwh/" }
            ]
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
            title: "Boron",
            color: "boron",
            type: "Publication",
            category: "publications",
            description: "Library and CLI for resolving information and documentation from repositories.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Boron",
            tags: [{ label: "DX" }],
            installMethods: [
                { command: "n2 get boron && n2 install boron", note: "recommended" },
                { command: "n2 get boron", note: "library only" }
            ]
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
            title: "Arsenic",
            color: "arsenic",
            type: "Publication",
            category: "publications",
            description: "Framework and CLI for custom Python syntax and executables.",
            status: "wip",
            statusLabel: "IN DEVELOPMENT",
            github: "https://github.com/Wednesware/Arsenic",
            tags: [{ label: "Python Expanded" }],
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
        },
        {
            title: "Carbon",
            color: "carbon",
            type: "Publication",
            category: "publications",
            description: "A lightweight cross-platform audio playback library for WAV files.",
            status: "live",
            statusLabel: "LIVE",
            github: "https://github.com/Wednesware/Carbon",
            tags: [{ label: "Audio playback" }],
            codeChip: "n2 get carbon"
        },
        {
            title: "Calcium",
            color: "calcium",
            type: "Publication",
            category: "publications",
            description: "Bonemarrow Engine simplified into a fully-fledged game framework.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "https://github.com/Wednesware/Calcium",
            tags: [{ label: "Game engine" }],
            codeChip: "n2 get calcium"
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
            title: "Skelebash",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "Coming soon...",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "github.com/Wednesware/Skelebash",
            tags: [
                { label: "GAME", icon: "fa-solid fa-gamepad" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Bonemarrow Engine (BMRW)",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "The Sodium-based game engine Skelebash runs on.",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "github.com/Wednesware/Bonemarrow",
            tags: [
                { label: "APP/CLI", icon: "fa-solid fa-terminal" },
                { label: "FRAMEWORK/LIBRARY", icon: "fa-solid fa-code" },
                { label: "BETA", icon: "fa-solid fa-flask" }
            ],
            codeChip: "COMING SOON...",
            subtitle: "by Wednesware"
        },
        {
            title: "Reskedule",
            color: "generic",
            type: "Distribution",
            category: "distros",
            description: "Coming soon...",
            status: "wip",
            statusLabel: "DEVELOPMENT QUEUED",
            github: "github.com/Wednesware/Reskedule",
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
            github: "github.com/Wednesware/Grapple",
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
            github: "github.com/Wednesware/Atmosphere",
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
            github: "github.com/Wednesware/Studio",
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
            github: "github.com/Wednesware/Airship",
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
            github: "github.com/Wednesware/Modmancer",
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
            github: "github.com/Wednesware/Voltage",
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
