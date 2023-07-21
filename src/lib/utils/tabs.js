import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'sports_football',
        label: 'League Website',
        dest: 'https://extraordinarilyfreshffl.com/',
    },
    {
        icon: 'view_comfy',
        label: 'Taxi Squad Draft',
        dest: '/drafts',
    },
    {
        icon: 'swap_horiz',
        label: 'Taxi Squad Transactions',
        dest: '/transactions',
    },
    {
        icon: 'storage',
        label: 'Taxi Squad Rosters',
        dest: '/rosters',
    },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        children: [
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
            },
            {
                icon: 'local_fire_department',
                label: 'Rivalry',
                dest: '/rivalry',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'emoji_events',
                label: 'Trophy Room',
                dest: '/awards',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
            },
            {
                icon: 'history_edu',
                label: 'Constitution',
                dest: '/constitution',
            },
            {
                icon: 'sports_football',
                label: 'Go to Sleeper',
                dest: `https://sleeper.app/leagues/${leagueID}`,
            },
        ]
    },
    {
        icon: 'lightbulb',
        label: 'Go to Sleeper',
        dest: `https://sleeper.app/leagues/${leagueID}`,
    },
];
