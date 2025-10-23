import { sidebar } from "./sidebar.js";

export const navbar = [
    {
        text: '文档',
        children: Object.entries(sidebar).map(([path, sections]) => {
            const firstSection = sections[0]
            return {
                text: firstSection.text,
                link: firstSection.children?.[0] || `${path}/`,
            }
        }),
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