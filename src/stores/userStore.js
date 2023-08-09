import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

export const locale = persistentAtom('locale', 'en')
export const userId = persistentAtom('userId', 7);
export const userName = atom('User');