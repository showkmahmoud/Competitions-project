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
];
