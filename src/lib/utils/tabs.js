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
        icon: 'leaderboard',
        label: 'Rankings',
        dest: 'https://extraordinarilyfreshffl.com/taxi-squad-draft/',
    },
    {
        icon: 'lightbulb',
        label: 'Go to Sleeper',
        dest: `https://sleeper.app/leagues/${leagueID}`,
    },
];
