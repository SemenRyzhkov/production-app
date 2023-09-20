import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
  name: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, name, reducer, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    store.reducerManager.add(name, reducer);
    dispatch({ type: '@INIT login form reducer' });
    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
