import * as React from 'react';
import { RootStore } from '../stores/rootStore';

const StoreContext = React.createContext<RootStore>();

export const useStoreContext = () => React.useContext(StoreContext);

const StoreProvider = StoreContext.Provider;
export { StoreProvider };
