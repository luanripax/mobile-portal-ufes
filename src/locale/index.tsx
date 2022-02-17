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
  if (currentIdiom) {
    const key = Object.keys(currentIdiom).find((key) => key === index);
    const subKey = Object.keys(currentIdiom[index]).find(
      (key) => key === subindex
    );
    return currentIdiom[key][subKey];
  }
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
