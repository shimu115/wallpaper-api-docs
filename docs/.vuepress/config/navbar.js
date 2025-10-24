import { sidebar } from "./sidebar.js";

export const navbar = [
    {
        text: 'docs',
        children: Object.entries(sidebar).map(([path, sections]) => {
            const firstSection = sections[0]
            return {
                text: firstSection.text,
                children: firstSection.children
            }
        }),
    },
    {
        text: 'Release Notes',
        children: [
            {
                text: 'v1.1.0-latest',
                link: '/release-notes.md#v1.1.0%20-%20latest%20(2025-10-25)'
            },
            {
                text: 'v1.0.1',
                link: '/release-notes.md#v1.0.1%20(2025-10-11)'
            },
            {
                text: 'v1.0.0-alpha',
                link: '/release-notes.md#v1.0.0-alpha%20-%20Pre-release%20(2025-10-3)'
            }
        ]
    },
    {
        text: 'GitHub',
        children: [
            {
                text: 'wallpaper-api',
                link: 'https://github.com/shimu115/wallpaper-api',
            },
            {
                text: 'wallpaper-api-docs',
                link: 'https://github.com/shimu115/wallpaper-api-docs',
            }
        ]
    }
]