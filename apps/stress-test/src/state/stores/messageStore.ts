import { InlookMessageList } from '../data/inlook/types';
import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';

export class MessageStore {
  public rootStore: RootStore;
  public messages: InlookMessageList;
  public selectedMessageId: string | null;
  public messageFilter: string | null;
  public composingMessage: boolean;

  constructor(rootStore: RootStore, messages: InlookMessageList) {
    this.rootStore = rootStore;
    this.messages = messages;
    this.selectedMessageId = null;
    this.messageFilter = null;
    this.composingMessage = false;

    makeAutoObservable(this, { rootStore: false });
  }

  public setSelectedMesssageId = (messageId: string) => {
    this.selectedMessageId = messageId;
  };

  public setMessageFilter = (filter: string | null) => {
    this.messageFilter = filter;
  };

  public setIsComposingMessage = (isComposingMessage: boolean) => {
    this.composingMessage = isComposingMessage;
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

  public get currentSelectedMessage() {
    return this.currentFolderMesssages.find(msg => msg.id === this.selectedMessageId);
  }

  public get isComposingMessage() {
    return this.composingMessage;
  }
}
