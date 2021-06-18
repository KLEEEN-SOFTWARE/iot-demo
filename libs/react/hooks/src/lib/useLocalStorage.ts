import { useState, useEffect } from 'react';
import { StorageHelper } from '@aws-amplify/core';

export const useLocalStorage = (key: string, defaultValue: any) => {
  const _storage = new StorageHelper().getStorage();
  const [localStorageValue, setLocalStorageValue] = useState((state) => {
    let value;
    try {
      value = JSON.parse(_storage.getItem(key) || JSON.stringify(defaultValue));
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    let value;
    try {
      value = JSON.parse(_storage.getItem(key) || JSON.stringify(defaultValue));
    } catch (e) {
      value = defaultValue;
    }
    setLocalStorageValue(value);
  }, [key]);

  useEffect(() => {
    if (key) {
      _storage.setItem(key, JSON.stringify(localStorageValue));
    }
  }, [localStorageValue]);

  const removeLocalStorageValue = () => {
    _storage.removeItem(key);
  };

  return { localStorageValue, setLocalStorageValue, removeLocalStorageValue };
};
