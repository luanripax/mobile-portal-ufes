import React, { useEffect, useState } from 'react';
import en_US from './translation/en_US.json';
import pt_BR from './translation/pt_BR.json';
import { useSetting, SettingProvider } from '../hooks/settings';
import { View } from 'react-native';

let language = '';

export function getDeviceIdiom() {
  if (language === 'en_US') {
    return en_US;
  }
  if (language === 'pt_BR') {
    return pt_BR;
  }
}

export const locale = (word: string) => {
  const [index, subindex] = word.split('.');
  const currentIdiom = getDeviceIdiom();
  for (var key in currentIdiom)
    if (key === index)
      for (var subkey in currentIdiom[index])
        if (subkey === subindex) return currentIdiom[key][subkey];
  return word;
};

export function Locale() {
  const { idiom } = useSetting();
  language = idiom;

  useEffect(() => {
    language = idiom;
  }, [idiom]);

  return <></>;
}
