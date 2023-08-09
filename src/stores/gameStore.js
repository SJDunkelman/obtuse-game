import { atom } from 'nanostores';

export const currentGameId = atom(null);
export const currentRound = atom(1);
export const targetWord = atom("Word");