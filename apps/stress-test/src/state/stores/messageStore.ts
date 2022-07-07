import { InlookMessageList } from '../data/inlook/types';
import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';

export class MessageStore {
  public rootStore: RootStore;
  public messages: InlookMessageList;
  public selectedMessageId: string | null;
  public messageFilter: string | null;

  constructor(rootStore: RootStore, messages: InlookMessageList) {
    this.rootStore = rootStore;
    this.messages = messages;
    this.selectedMessageId = null;
    this.messageFilter = null;

    makeAutoObservable(this, { rootStore: false });
  }

  public setSelectedMesssageId = (messageId: string) => {
    this.selectedMessageId = messageId;
  };

  public setMessageFilter = (filter: string | null) => {
    this.messageFilter = filter;
  };

  public get currentFolderMesssages() {
    return this.messages[this.rootStore.folderStore.selectedFolderId];
  }

  public get filteredMessages() {
    const msgFilter = this.messageFilter?.toLowerCase();

    if (!msgFilter) {
      return this.currentFolderMesssages;
    }
    return this.currentFolderMesssages.filter(msg => {
      return msg.from.toLowerCase().startsWith(msgFilter);
    });
  }
}
