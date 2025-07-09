import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
            icon: 'sports_football',
        label: 'League Website',
        dest: 'https://extraordinarilyfreshffl.com/',
    },
    {
        icon: 'storage',
        label: 'Rosters',
        dest: '/rosters',
    },
    {
        icon: 'swap_horiz',
        label: 'Taxi Squad Transactions',
        dest: 'https://extraordinarilyfreshffl.com/taxi-squad-transactions/',
    },
    {
        icon: 'leaderboard',
        label: 'Current Draft',
        dest: '/drafts',
    },
    {
        icon: 'view_comfy',
       label: 'Taxi Squad Draft',
        dest: 'https://extraordinarilyfreshffl.com/taxi-squad-draft/',
    },
    {
        icon: 'lightbulb',
        label: 'Go to Sleeper',
        dest: `https://sleeper.app/leagues/${leagueID}`,
    },
];
