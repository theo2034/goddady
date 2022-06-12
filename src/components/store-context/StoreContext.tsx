import React, { useContext } from 'react';
import { StoreConfigType } from '../../types/StoreConfig';

// Given that StoreContext is created server side, we can cast here to avoid typing errors
export const StoreContext = React.createContext<StoreConfigType>(
  null as unknown as StoreConfigType
);

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  return context;
};
