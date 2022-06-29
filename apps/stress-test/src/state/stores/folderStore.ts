import { InlookFolder } from '../data/inlook/types';
import { RootStore } from './rootStores';
import { makeAutoObservable } from 'mobx';

export class FolderStore {
  public rootStore: RootStore;
  public folders: InlookFolder[];
  public selectedFolder: string;

  constructor(rootStore: RootStore, folders: InlookFolder[]) {
    this.rootStore = rootStore;
    this.folders = folders;
    this.selectedFolder = folders[0].id;

    makeAutoObservable(this, { rootStore: false });
  }

  public setSelectedFolder = (folderId: string) => {
    this.selectedFolder = folderId;
  };
}
