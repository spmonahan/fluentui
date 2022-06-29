import { InlookMessageList } from '../data/inlook/types';
import { RootStore } from './rootStores';
import { makeAutoObservable } from 'mobx';

export class MessageStore {
  public rootStore: RootStore;
  public messages: InlookMessageList;
  public selectedMessage: string | null;
  public messageFilter: string | null;

  constructor(rootStore: RootStore, messages: InlookMessageList) {
    this.rootStore = rootStore;
    this.messages = messages;
    this.selectedMessage = null;
    this.messageFilter = null;

    makeAutoObservable(this, { rootStore: false });
  }

  public setSelectedMesssage = (messageId: string) => {
    this.selectedMessage = messageId;
  };

  public setMessageFilter = (filter: string) => {
    this.messageFilter = filter;
  };
}
