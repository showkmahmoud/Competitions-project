import { ITeam } from '../interfaces/team';

export const data: ITeam[] = [
  {
    name: 'Team 1',
    players: [
      { name: 'Player 1', checked: true },
      { name: 'Player 2', checked: false },
    ],
  },
  {
    name: 'Team 2',
    players: [
      { name: 'Player 1', checked: true },
      { name: 'Player 2', checked: true },
    ],
  },
  {
    name: 'Team 3',
    players: [
      { name: 'Player 1', checked: true },
      { name: 'Player 2', checked: false },
      { name: 'Player 3', checked: false },
      { name: 'Player 4', checked: true },

    ],
  },
];
