import { InlookFolder } from '../data/inlook/types';
import { RootStore } from './rootStore';
import { makeAutoObservable } from 'mobx';

export class FolderStore {
  public rootStore: RootStore;
  public folders: InlookFolder[];
  public selectedFolderId: string;

  constructor(rootStore: RootStore, folders: InlookFolder[]) {
    this.rootStore = rootStore;
    this.folders = folders;
    this.selectedFolderId = folders[0].id;

    makeAutoObservable(this, { rootStore: false });
  }

  public setSelectedFolderId = (folderId: string) => {
    this.selectedFolderId = folderId;
  };
}
