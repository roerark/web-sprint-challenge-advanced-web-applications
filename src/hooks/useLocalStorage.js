import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const mtkey = window.localStorage.getItem(key);
  if (mtkey === null || mtkey === "null") {
    window.localStorage.removeItem(key);
  }
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
