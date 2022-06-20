import type { InlookMessage, InlookState } from './types';
import { generateFolders, generateMessages } from './generateData';

const folders = generateFolders();
const messages = {} as Record<string, InlookMessage[]>;

for (const folder of folders) {
  messages[folder.id] = generateMessages();
}

export const state = {
  folders,
  messages,
} as InlookState;
