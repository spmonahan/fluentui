import type { InlookState } from './types';
import { generateFolders, generateMessages } from './generateData';

const folders = generateFolders();
const messages = {};

for (const folder of folders) {
  messages[folder] = generateMessages();
}

export const state = {
  folders,
  messages,
} as InlookState;
