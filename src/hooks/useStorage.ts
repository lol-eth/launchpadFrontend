/* eslint-disable consistent-return */
import { useCallback, useState, useEffect } from 'react';

function useStorage(key: string, defaultValue: any, storageObject: any) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') {
      return defaultValue();
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

export function useLocalStorage(key: string, defaultValue: any) {
  // if (!(typeof window !== 'undefined')) {
  //   return {};
  // }
  return useStorage(key, defaultValue, window?.localStorage);
}

export function useSessionStorage(key: string, defaultValue: any) {
  // if (!(typeof window !== 'undefined')) {
  //   return {};
  // }
  return useStorage(key, defaultValue, window?.sessionStorage);
}
