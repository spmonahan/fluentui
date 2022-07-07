import { generateFolders, generateMessages } from '../data/inlook/generateData';
import { InlookMessageList } from '../data/inlook/types';
import { FolderStore } from './folderStore';
import { MessageStore } from './messageStore';

export class RootStore {
  public folderStore: FolderStore;
  public messageStore: MessageStore;

  constructor() {
    const folders = generateFolders();
    this.folderStore = new FolderStore(this, folders);

    const messages = {} as InlookMessageList;
    for (const folder of folders) {
      messages[folder.id] = generateMessages();
    }

    this.messageStore = new MessageStore(this, messages);
  }
}
