import { atom } from 'nanostores';

export const $lang = atom('os');

export function toggleLang() {
  $lang.set($lang.get() === 'os' ? 'ru' : 'os');
}
