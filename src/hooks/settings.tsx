import { createContext, ReactNode, useContext, useState } from 'react';

const SettingContext = createContext({});

interface SettingProviderProps {
  children: ReactNode;
}

function SettingProvider({ children }: SettingProviderProps) {
  const [appTheme, setAppTheme] = useState('dark');
  const [idiom, setIdiom] = useState('pt-br');
  const [allowNotify, setAllowNotify] = useState(true);

  return (
    <SettingContext.Provider
      value={{
        appTheme,
        setAppTheme,
        idiom,
        setIdiom,
        allowNotify,
        setAllowNotify
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingContext);
  return context;
}

export { SettingProvider, useSetting };
